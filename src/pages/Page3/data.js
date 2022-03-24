const russian_text = {
    title: 'Безопасность блокчейна',
    description: ['Если злоумышленик сможет подделать хэш одного блока, то все последующие блоки будут недействительными. Так злоумышленик может подделать все остальные блоки в сети, но чтобы избежать этого в блокчейне используется механизм Proof of Work, который замедляет создание новых блоков.', 'Алгоритм консенсуса — это правила, по которым происходит генерация блоков в блокчейне. В зависимости от используемого алгоритма в одних блокчейнах работает механизм майнинга для добычи новых монет, а в других — стейкинг, одни сети работают быстрее, но подвержены централизации, другие — медленнее, но их сложно взять под контроль недобросовестным участникам сети. Поэтому важно разбираться в отличиях между PoW, PoS, PoA и другими алгоритмами консенсуса, чтобы правильно оценить перспективы блокчейн-проекта.', 'Алгоритм консенсуса блокчейна — это способ, благодаря которому децентрализованные ноды сети достигают согласия (или консенсуса) о текущем состоянии данных во всех блоках. Нода — это любой компьютер, подключенный к блокчейну, который проверяет и подтверждает транзакции, и хранит копию блокчейна.'],
    button: 'Понятно',
}

const english_text = {
    title: 'One block contains:',
    description: ['If an attacker can forge the hash of one block, all subsequent blocks will be invalid. This way, an attacker can forge all other blocks in the network, but to avoid this, the blockchain uses the Proof of Work mechanism, which slows down the creation of new blocks.', 'In addition, blockchain is a decentralized network, so each participant checks the validity of a new block. If more than 50% of the participants agree that the new block is not tampered with, it is added to the network.'],
    button: 'Clearly',
}

export { russian_text, english_text };