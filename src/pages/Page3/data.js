const russian_text = {
    title: 'Безопасность блокчейна',
    description: ['Если злоумышленик сможет подделать хэш одного блока, то все последующие блоки будут недействительными. Так злоумышленик может подделать все остальные блоки в сети, но чтобы избежать этого в блокчейне используется механизм Proof of Work, который замедляет создание новых блоков.', 'Помимо этого, блокчейн - это децентрализованная сеть, поэтому каждый участник сети проверяет валидность нового блока. Если более 50% участников согласны с тем, что новый блок не является подделаным, то он добавляется в сеть.'],
    button: 'Понятно',
}

const english_text = {
    title: 'One block contains:',
    description: ['If an attacker can forge the hash of one block, all subsequent blocks will be invalid. This way, an attacker can forge all other blocks in the network, but to avoid this, the blockchain uses the Proof of Work mechanism, which slows down the creation of new blocks.', 'In addition, blockchain is a decentralized network, so each participant checks the validity of a new block. If more than 50% of the participants agree that the new block is not tampered with, it is added to the network.'],
    button: 'Clearly',
} 

export { russian_text, english_text };