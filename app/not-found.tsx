export default async function Default() {
    await new Promise((resolve) => setTimeout(resolve, 5000))
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <p>Sorry! Page does not exist</p>
      </div>
    )
  }