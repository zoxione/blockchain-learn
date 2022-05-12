const russian_text = {
    title: 'Блокчейн - это...',
    description: [
        'Блокчейн – это распределенная база данных. Представляет собой цепочку записей (блоков), которые нельзя поменять.',
        'Но по какому принципу они соединяются? Давай разбираться!',
        'Блокчейн — выстроенная по определённым правилам непрерывная последовательная цепочка блоков (связный список), содержащих информацию. Связь между блоками обеспечивается не только нумерацией, но и тем, что каждый блок содержит свою собственную хеш-сумму и хеш-сумму предыдущего блока. Изменение любой информации в блоке изменит его хеш-сумму. Чтобы соответствовать правилам построения цепочки, изменения хеш-суммы нужно будет записать в следующий блок, что вызовет изменения уже его собственной хеш-суммы. При этом предыдущие блоки не затрагиваются. Если изменяемый блок последний в цепочке, то внесение изменений может не потребовать существенных усилий. Но если после изменяемого блока уже сформировано продолжение, то изменение может оказаться крайне трудоёмким процессом. Дело в том, что обычно копии цепочек блоков хранятся на множестве разных компьютеров независимо друг от друга.'
    ],
    button: 'Разобраться',
}

const english_text = {
    title: 'Blockchain is...',
    description: [
        'Blockchain is a distributed database. It is a chain of records (blocks) that cannot be changed',
        'But what principle is used to connect them? Let`s figure it out!',
        'Blockchain is a continuous, sequential chain of blocks (a linked list) that contains information, lined up according to certain rules. The connection between blocks is provided not only by numbering, but also by the fact that each block contains its own hash sum and the hash sum of the previous block. Changing any information in a block will change its hash sum. To comply with the chain rules, the hash sum changes must be written to the next block, which will cause its own hash sum to change. The previous blocks are not affected. If the block to be modified is the last one in a chain, the modification would not require much effort. But if a continuation has already been generated after the modified block, the change can be a very laborious process. The point is that usually copies of block chains are stored on many different computers independently of each other.'
    ],
    button: 'Figure it out',
}

export { russian_text, english_text };