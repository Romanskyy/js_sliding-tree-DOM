"use strict";
// Знаходимо корінь дерева за класом `.tree`.
// Працюємо тільки в межах цього списку.
const tree = document.querySelector(".tree");
// Проходимо кожен пункт `li`.
// Підготовлюємо заголовки для кліку.
tree.querySelectorAll("li").forEach((item)=>{
    // Шукаємо прямий `ul` у поточному пункті.
    // Це його гілка з дітьми.
    const nestedList = item.querySelector(":scope > ul");
    // Якщо дітей немає, пункт не розкривний.
    if (!nestedList) // Завершуємо цю ітерацію.
    // Переходимо до наступного `li`.
    return;
    // Знаходимо текстовий вузол з назвою пункту.
    // Наприклад, це може бути "Fruit".
    // Беремо тільки вузол із непорожнім текстом.
    const titleTextNode = [
        ...item.childNodes
    ].find(// Перевіряємо, що вузол саме текстовий.
    // Перевіряємо, що `trim` не порожній.
    (node)=>node.nodeType === Node.TEXT_NODE && node.textContent.trim());
    // Якщо назви нема, пропускаємо.
    if (!titleTextNode) // Завершуємо цю ітерацію.
    // Переходимо до наступного `li`.
    return;
    // Створюємо новий елемент `span`.
    // У нього помістимо назву гілки.
    const title = document.createElement("span");
    // Записуємо в `span` очищений текст заголовка.
    // Зайві пробіли прибираємо.
    title.textContent = titleTextNode.textContent.trim();
    // Очищаємо старий текстовий вузол.
    // Це прибирає дублювання тексту.
    titleTextNode.textContent = "";
    // Вставляємо `span` на початок `li`.
    // Так клік по назві легко відслідкувати.
    item.prepend(title);
});
// Додаємо один обробник кліку на все дерево.
// Це делегування подій.
tree.addEventListener("click", (clickEvent)=>{
    // Шукаємо найближчий `span` від місця кліку.
    // Реагуємо лише на клік по тексту заголовка.
    const title = clickEvent.target.closest("span");
    // Якщо клік не по заголовку, ігноруємо його.
    // Також ігноруємо клік поза деревом.
    if (!title || !tree.contains(title)) // Тихо завершуємо обробник.
    // За умовою клік у порожнє місце ігноруємо.
    return;
    // Знаходимо `li` для натиснутого заголовка.
    const currentItem = clickEvent.target.closest("li");
    // Беремо прямий вкладений `ul` цього пункту.
    // Ховаємо або показуємо лише його гілку.
    const nestedList = currentItem.querySelector(":scope > ul");
    // Якщо прямого `ul` нема, пропускаємо.
    if (!nestedList) // Завершуємо обробник без змін.
    return;
    // Інвертуємо властивість `hidden`.
    // Видно -> сховати, сховано -> показати.
    nestedList.hidden = !nestedList.hidden;
});

//# sourceMappingURL=index.f75de5e1.js.map
