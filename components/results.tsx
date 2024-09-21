import { Box, Card, Grid, Typography, Stack } from '@mui/joy'
import truncateEthAddress from 'truncate-eth-address'
import Confetti from 'canvas-confetti'
import { useState, useEffect, Suspense, useRef } from 'react'
import { Canvas } from 'react-three-fiber';
import { OrbitControls, Environment, useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';


interface OutputProps {
  txCount: number
  topTransaction: {
    tx_hash: string
  }
  topMinerPaid: string
  topMinerTxs: string
  gasBurned: string
  uniqueMiners: string[]
  allMinersUnique: boolean
}

export default async function Results({
  output,
}: {
  output: OutputProps | undefined
}) {
  const [isConfettiActive, setIsConfettiActive] = useState(false)
 
  const Model: React.FC<any> = (props) => {
    const group = useRef();
  const { nodes, materials, animations } = useGLTF("/ethereum_logo_3d.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1.00}
          userData={{ name: "Sketchfab_model" }}
        >
          <group name="root" userData={{ name: "root" }}>
            <group
              name="GLTF_SceneRootNode"
              rotation={[Math.PI / 2, 0, 0]}
              userData={{ name: "GLTF_SceneRootNode" }}
            >
              <group name="E_th_0" userData={{ name: "E_th_0" }}>
                <mesh
                  name="Object_4"
                  geometry={nodes.Object_4.geometry}
                  material={materials.SILVER_metal}
                  userData={{ name: "Object_4" }}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

  useEffect(() => {
    if (output) {
      setIsConfettiActive(true)
      var confettiSettings = {
        startVelocity: 30,
        spread: 360,
        ticks: 60,
        zIndex: 0,
      }
      function createConfetti(originX: number, originY: number) {
        Confetti({
          ...confettiSettings,
          particleCount: 50,
          origin: { x: originX, y: originY },
        })
      }
      var duration = 15 * 1000
      var animationEnd = Date.now() + duration
      var interval = setInterval(() => {
        var timeLeft = animationEnd - Date.now()
        if (timeLeft <= 0) {
          clearInterval(interval)
          setIsConfettiActive(false)
        }
        var particleCount = 50 * (timeLeft / duration)
        createConfetti(0.1, Math.random() - 0.2)
        createConfetti(0.7, Math.random() - 0.2)
      }, 250)
    }
  }, [output])

  return (
    <Box>
      {isConfettiActive && <Confetti />}
      <Stack sx={{ display: 'flex', alignItems: 'center', height: '300px' }}>
      <Canvas 
      shadows dpr={[1, 2]} 
      camera={{ position: [0, 0, 4], fov: 50 }}>
          <ambientLight intensity={0.7} />
          <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
          <Suspense fallback={null}>
            <Model />
            <Environment preset="city" />
          </Suspense>
          <OrbitControls enableZoom={false} autoRotate />
        </Canvas>
      </Stack>
      <Grid container spacing={2}>
        <Grid xs={12} md={6}>
          <Card
            sx={{
              mt: 2,
              p: 2,
              textAlign: 'center',
              backgroundColor: '#92DCE5',
              width: '100%',
              height: '120px',
              '@media (max-width: 767px)': {
                width: '80%',
                margin: '0 auto',
              },
            }}
          >
            <Typography level='title-lg'>
              Transaction Count: {output?.txCount}
            </Typography>
          </Card>
        </Grid>
        <Grid xs={12} md={6} spacing={2}>
          <Grid>
            <Card
              sx={{
                mt: 2,
                p: 2,
                textAlign: 'center',
                backgroundColor: '#F8F7F9',
                width: '100%',
                height: '60px',
                '@media (max-width: 767px)': {
                  width: '80%',
                  margin: '0 auto',
                },
              }}
            >
              <Typography level='title-lg'>
                Gas Used: {output?.gasBurned}
              </Typography>
            </Card>
            <Grid>
              <Card
                sx={{
                  mt: 2,
                  p: 2,
                  textAlign: 'center',
                  backgroundColor: '#49D49D',
                  width: '100%',
                  '@media (max-width: 767px)': {
                    width: '80%',
                    margin: '0 auto',
                    marginTop: '10px',
                  },
                }}
              >
                <Typography level='title-lg'>
                  Top Transaction:{' '}
                  {output?.topTransaction?.tx_hash &&
                    truncateEthAddress(output.topTransaction.tx_hash)}
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        {output?.allMinersUnique ? (
          <>
            <Grid xs={12} md={6}>
              <Card
                sx={{
                  mt: 2,
                  p: 2,
                  textAlign: 'center',
                  backgroundColor: '#F7EC59',
                  width: '100%',
                  height: '70px',
                  '@media (max-width: 767px)': {
                    width: '80%',
                    margin: '0 auto',
                  },
                }}
              >
                <Typography level='title-lg'>
                  Top Miner (Transactions):{' '}
                  {truncateEthAddress(output.topMinerTxs)}
                </Typography>
              </Card>
            </Grid>
            <Grid xs={12} md={6}>
              <Card
                sx={{
                  mt: 2,
                  p: 2,
                  textAlign: 'center',
                  backgroundColor: '#F7EC59',
                  width: '100%',
                  height: '60px',
                  '@media (max-width: 767px)': {
                    width: '80%',
                    margin: '0 auto',
                  },
                }}
              >
                <Typography level='title-md'>
                  Top Miner Paid: {truncateEthAddress(output.topMinerPaid)}
                </Typography>
              </Card>
            </Grid>
          </>
        ) : (
          <Grid xs={12}>
            <Card
              sx={{
                mt: 2,
                p: 2,
                textAlign: 'center',
                backgroundColor: '#F7EC59',
                width: '100%',
                '@media (max-width: 767px)': {
                  width: '80%',
                  margin: '0 auto',
                },
              }}
            >
              <Typography level='title-md'>
                Top Miner Paid:{' '}
                {output?.topMinerPaid &&
                  truncateEthAddress(output.topMinerPaid)}
              </Typography>
            </Card>
          </Grid>
        )}
      </Grid>
    </Box>
  )
}