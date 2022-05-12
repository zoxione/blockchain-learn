const russian_text = {
    title: 'Один блок содержит:',
    list: ['любую информацию', 'уникальный хэш', 'хэш предыдущего блока'],
    description: [
        'Информация может быть любой, например, в блокчейне биткоина хранится информация о отправителе, получателе и сумме транзакции. Когда блок создан сразу вычисляется его хэш. Изменения внутри блока изменят его хэш. Третий элемент - это хэш предыдущего блока, благодаря которому эффективно создается цепочка блоков и обеспечивается ее безопасность.'
    ],
    button: 'Понятно',
}

const english_text = {
    title: 'One block contains:',
    list: ['information', 'unique hash', 'previous block hash'],
    description: [
        'The information can be anything, for example, the bitcoin blockchain stores information about the sender, the recipient and the amount of the transaction. When a block is created, its hash is immediately computed. Changes inside the block will change its hash. The third element is the hash of the previous block, which effectively creates the blockchain and secures it.'
    ],
    button: 'Clearly',
}

export { russian_text, english_text };