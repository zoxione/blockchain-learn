const russian_text = {
    title: 'Безопасность блокчейна',
    description: [
        'Если злоумышленик сможет подделать хэш одного блока, то все последующие блоки будут недействительными. Так злоумышленик может подделать все остальные блоки в сети, но чтобы избежать этого в блокчейне используется механизм Proof of Work, который замедляет создание новых блоков.',
        'Алгоритм консенсуса — это правила, по которым происходит генерация блоков в блокчейне. В зависимости от используемого алгоритма в одних блокчейнах работает механизм майнинга для добычи новых монет, а в других — стейкинг, одни сети работают быстрее, но подвержены централизации, другие — медленнее, но их сложно взять под контроль недобросовестным участникам сети. Поэтому важно разбираться в отличиях между PoW, PoS, PoA и другими алгоритмами консенсуса, чтобы правильно оценить перспективы блокчейн-проекта.',
        'Алгоритм консенсуса блокчейна — это способ, благодаря которому децентрализованные ноды сети достигают согласия (или консенсуса) о текущем состоянии данных во всех блоках. Нода — это любой компьютер, подключенный к блокчейну, который проверяет и подтверждает транзакции, и хранит копию блокчейна.'
    ],
    button: 'Понятно',
}

const english_text = {
    title: 'Blockchain security',
    description: [
        'If an attacker can forge the hash of one block, all subsequent blocks will be invalid. In this way, an attacker can forge all other blocks in the network, but to avoid this, the blockchain uses the Proof of Work mechanism, which slows down the creation of new blocks.',
        'The consensus algorithm is the rules by which blocks in the blockchain are generated. Depending on the algorithm used, some blockchains have a mining mechanism for mining new coins and others have a stacking mechanism, some networks are faster but prone to centralization, others are slower but difficult for unscrupulous network participants to take control of. So it`s important to understand the differences between PoW, PoS, PoA and other consensus algorithms to properly assess the prospects for a blockchain project.',
        'The blockchain consensus algorithm is the way in which the decentralized nodes of the network reach agreement (or consensus) on the current state of data in all blocks. A node is any computer connected to the blockchain that verifies and validates transactions, and keeps a copy of the blockchain.'
    ],
    button: 'Clearly',
}

export { russian_text, english_text };