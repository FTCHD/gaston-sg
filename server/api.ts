'use server'

import { formatEther } from 'viem'

export async function gas(address: string) {
  //! RETURN A DUMMY MAP WHEN YOU'RE BUILDING THE UI TO AVOID WAITING AND NOT CONSUME API CREDITS
  // return {
  //   txCount: 10,
  //   topTransaction: {
  //     block_signed_at: '2023-06-03T19:32:47Z',
  //     block_height: 17402241,
  //     block_hash:
  //       '0x5ac930460d531d072184395629e4b27924b7cf9a8eabbe303806e43b1a074581',
  //     tx_hash:
  //       '0xf1c1eaee24adf4dd587b30918ecd9203fc6532ef3569943455a27f98b9c245ff',
  //     tx_offset: 65,
  //     successful: true,
  //     miner_address: '0x1f9090aae28b8a3dceadf281b0f12828e676c326',
  //     from_address: '0xe3e7a2bf703cbbb3d250b61dfd0804e5492dbf61',
  //     from_address_label: null,
  //     to_address: '0xea8e957b26ffc41f71cd14980c7e9c63fe629c2f',
  //     to_address_label: null,
  //     value: '0',
  //     value_quote: 0,
  //     pretty_value_quote: '$0.00',
  //     gas_metadata: {
  //       contract_decimals: 18,
  //       contract_name: 'Ether',
  //       contract_ticker_symbol: 'ETH',
  //       contract_address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  //       supports_erc: null,
  //       logo_url: 'https://www.datocms-assets.com/86369/1669653891-eth.svg',
  //     },
  //     gas_offered: 69846,
  //     gas_spent: 46564,
  //     gas_price: 20830222381,
  //     fees_paid: '969938474948884',
  //     gas_quote: 1.8352365168604,
  //     pretty_gas_quote: '$1.84',
  //     gas_quote_rate: 1892.1164220824598,
  //     log_events: [
  //       {
  //         block_signed_at: '2023-06-03T19:32:47Z',
  //         block_height: 17402241,
  //         tx_offset: 65,
  //         log_offset: 205,
  //         tx_hash:
  //           '0xf1c1eaee24adf4dd587b30918ecd9203fc6532ef3569943455a27f98b9c245ff',
  //         raw_log_topics: [
  //           '0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31',
  //           '0x000000000000000000000000e3e7a2bf703cbbb3d250b61dfd0804e5492dbf61',
  //           '0x0000000000000000000000001e0049783f008a0085193e00003d00cd54003c71',
  //         ],
  //         sender_contract_decimals: 0,
  //         sender_name: 'RocketeerProgeny',
  //         sender_contract_ticker_symbol: 'RCTP',
  //         sender_address: '0xea8e957b26ffc41f71cd14980c7e9c63fe629c2f',
  //         sender_address_label: null,
  //         sender_logo_url:
  //           'https://logos.covalenthq.com/tokens/1/0xea8e957b26ffc41f71cd14980c7e9c63fe629c2f.png',
  //         raw_log_data:
  //           '0x0000000000000000000000000000000000000000000000000000000000000001',
  //         decoded: {
  //           name: 'ApprovalForAll',
  //           signature:
  //             'ApprovalForAll(indexed address _owner, indexed address _operator, bool _approved)',
  //           params: [
  //             {
  //               name: '_owner',
  //               type: 'address',
  //               indexed: true,
  //               decoded: true,
  //               value: '0xe3e7a2bf703cbbb3d250b61dfd0804e5492dbf61',
  //             },
  //             {
  //               name: '_operator',
  //               type: 'address',
  //               indexed: true,
  //               decoded: true,
  //               value: '0x1e0049783f008a0085193e00003d00cd54003c71',
  //             },
  //             {
  //               name: '_approved',
  //               type: 'bool',
  //               indexed: false,
  //               decoded: true,
  //               value: true,
  //             },
  //           ],
  //         },
  //       },
  //     ],
  //   }, // copy data from a response
  //   topMinerPaid: '0x95222290dd7278aa3ddd389cc1e1d165cc4bafe5',
  //   topMinerTxs: '0x95222290dd7278aa3ddd389cc1e1d165cc4bafe5',
  //   gasBurned: '0.0551',
  //   uniqueMiners: [
  //     '0xdafea492d9c6733ae3d56b7ed1adb60692c98bc5',
  //     '0x95222290dd7278aa3ddd389cc1e1d165cc4bafe5',
  //     '0xab6b4b11378a57933333e4acfdc45567dd78f14e',
  //     '0x1f9090aae28b8a3dceadf281b0f12828e676c326',
  //     '0x388c818ca8b9251b393131c08a736a67ccb19297',
  //     '0x690b9a9e9aa1c9db991c7721a92d351db4fac990',
  //     '0xe688b84b23f322a994a53dbf8e15fa82cdb71127',
  //     '0x4675c7e5baafbffbca748158becba61ef3b0a263',
  //     '0x34cb778ea0b3e386a16616ec643f06e900bdea26',
  //     '0xbaf6dc2e647aeb6f510f9e318856a1bcd66c5e19',
  //     '0xd89d7142b89b6f93e3241ef8d938958a30c0e84e',
  //     '0x062337b43926947962d33c89a980ffb839d33dec',
  //     '0xebec795c9c8bbd61ffc14a6662944748f299cacf',
  //     '0x5f927395213ee6b95de97bddcb1b2b1c0f16844f',
  //     '0xd0111cf5bf230832f422da1c6c1d0a512d4e005a',
  //     '0xfeebabe6b0418ec13b30aadf129f5dcdd4f70cea',
  //     '0x13f2241aa64bb6da2b74553fa9e12b713b74f334',
  //     '0x333333f332a06ecb5d20d35da44ba07986d6e203',
  //     '0x80ce431a78b53ee59f9d4de9b7b56ec927644d84',
  //     '0x6d2e03b7effeae98bd302a9f836d0d6ab0002766',
  //     '0x73fec5cb85dfd1eacb76474af5e15cfb2dd43096',
  //     '0x60dd4ef9313ce2b106af74756426305fa2750d5f',
  //     '0x199d5ed7f45f4ee35960cf22eade2076e95b253f',
  //     '0xcf1639020a96544941b104ce040090d3b3727d6a',
  //     '0xadae1798f761fa7fce29b6673d453d1a48a2931a',
  //     '0x378c7f9ad85f6466b6b10906e9ab16651183d2dd',
  //     '0x5124fcc2b3f99f571ad67d075643c743f38f1c34',
  //     '0x8880bb98e7747f73b52a9cfa34dab9a4a06afa38',
  //     '0x24d6c74d811cfde65995ed26fd08af445f8aab06',
  //     '0xe887312c0595a10ac88e32ebb8e9f660ad9ab7f7',
  //     '0xffee087852cb4898e6c3532e776e68bc68b1143b',
  //     '0x7d8f2004ce31994c1f7364cd1e2b23a44ebb3064',
  //     '0xb063ef04fd5536104f0bad0aaca0cef435f8052a',
  //     '0xbd3afb0bb76683ecb4225f9dbc91f998713c3b01',
  //     '0x15775a239cc38db9347934f82d4bc9bd4d1f7fef',
  //     '0xb4c9e4617a16be36b92689b9e07e9f64757c1792',
  //     '0x90b0c836a19a74195d45fad2d2d3895a7a3eab08',
  //     '0xe43cc5b6ff052f5aa931a4f9ef2bfa0c500014ca',
  //     '0xcf6715cbd7a900bbbde15e8d1dd6779815258e60',
  //     '0x40dbda9109d48d9dbbe87633c6211a192a090dcc',
  //     '0x4838b106fce9647bdf1e7877bf73ce8b0bad5f97',
  //     '0xd11d7d2cb0aff72a61df37fd016ee1bd9f180633',
  //     '0x1cedc0f3af8f9841b0a1f5c1a4ddc6e1a1629074',
  //     '0x8ead0e8fec8319fd62c8508c71a90296efd4f042',
  //   ],
  //   allMinersUnique: true,
  // }

  let url = `https://api.covalenthq.com/v1/eth-mainnet/address/${address}/transactions_v3/page/0/`;
  let headers = new Headers();
  headers.set('Authorization', `Bearer ${process.env.COVALENT_KEY}`);

  let page = 0;
  let hasMore = true;
  const transactions = [];

  while (hasMore) {
    console.log('Page:', page);

    const response = await fetch(url, { method: 'GET', headers: headers });
    const json = await response.json() as any;

    transactions.push(
      ...json.data.items.filter(
        (item: any) => item.from_address.toLowerCase() === address.toLowerCase()
      )
    );

    if (json.data.links.next == null) {
      hasMore = false;
    } else {
      page = page + 1;
      url = `https://api.covalenthq.com/v1/eth-mainnet/address/${address}/transactions_v3/page/${page}/`;
    }
  }

  let txCount = 0;
  let gasBurned = BigInt(0);
  let topTransaction = transactions[0];
  const miners: string[] = [];
  const minerFees: any = {};
  const minerTxs: any = {};
  const uniqueMiners: string[] = [];

  transactions.forEach((item) => {
    txCount = txCount + 1;
    gasBurned = gasBurned + BigInt(item.fees_paid);
    miners.push(item.miner_address);

    if (minerFees[item.miner_address] == null) {
      minerFees[item.miner_address] = BigInt(item.fees_paid);
    } else {
      minerFees[item.miner_address] =
        minerFees[item.miner_address] + BigInt(item.fees_paid);
    }

    if (minerTxs[item.miner_address] == null) {
      minerTxs[item.miner_address] = 1;
    } else {
      minerTxs[item.miner_address] = minerTxs[item.miner_address] + 1;
    }

    if (!uniqueMiners.includes(item.miner_address)) {
        uniqueMiners.push(item.miner_address);
        }

    if (topTransaction.fees_paid < item.fees_paid) {
      topTransaction = item;
    }
  });

  const topMinerPaid = Object.keys(minerFees).reduce((a, b) =>
    minerFees[a] > minerFees[b] ? a : b
  );

  const topMinerTxs = Object.keys(minerTxs).reduce((a, b) =>
    minerTxs[a] > minerTxs[b] ? a : b
  );

  const allMinersUnique = uniqueMiners.length == miners.length;

  return {
    txCount, // number of txs
    topTransaction, // transaction with highest gas cost
    topMinerTxs, // miner with most txs
    topMinerPaid, // miner with most fees received
    gasBurned: formatEther(gasBurned), // total gas paid
    uniqueMiners, // nr. of unique miner addresses
    allMinersUnique, // all miners are unique (no duplicate miner addresses, so no miner has mined more than one tx)
  };
}