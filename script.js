// Array of books: each object contains ebook ID, title, author, genre, and short description
// Books are sourced from Project Gutenberg's top downloads; genres assigned based on common classifications
// This includes around 64 books (8 per genre) for reasonableness; more can be added as needed
const books = [
    // Fiction
    { id: 2641, title: 'A Room with a View', author: 'E. M. Forster', genre: 'fiction', description: 'A young Englishwoman\'s journey of self-discovery in Italy and England.' },
    { id: 145, title: 'Middlemarch', author: 'George Eliot', genre: 'fiction', description: 'Interwoven lives and social dynamics in a provincial English town.' },
    { id: 67979, title: 'The Blue Castle: a novel', author: 'L. M. Montgomery', genre: 'fiction', description: 'A repressed woman finds freedom and romance in a lakeside cabin.' },
    { id: 16389, title: 'The Enchanted April', author: 'Elizabeth Von Arnim', genre: 'fiction', description: 'Four women rent an Italian villa and transform their lives.' },
    { id: 2542, title: 'A Doll\'s House : a play', author: 'Henrik Ibsen', genre: 'fiction', description: 'A woman confronts the realities of her marriage and society.' },
    { id: 394, title: 'Cranford', author: 'Elizabeth Cleghorn Gaskell', genre: 'fiction', description: 'Gentle satire of life in a small English village.' },
    { id: 2160, title: 'The Expedition of Humphry Clinker', author: 'T. Smollett', genre: 'fiction', description: 'Epistolary novel following a family\'s travels through Britain.' },
    { id: 6761, title: 'The Adventures of Ferdinand Count Fathom — Complete', author: 'T. Smollett', genre: 'fiction', description: 'The exploits of a cunning adventurer across Europe.' },

    // Non-Fiction
    { id: 205, title: 'Walden, and On The Duty Of Civil Disobedience', author: 'Henry David Thoreau', genre: 'non-fiction', description: 'Reflections on simple living and resistance to unjust laws.' },
    { id: 1080, title: 'A Modest Proposal', author: 'Jonathan Swift', genre: 'non-fiction', description: 'Satirical essay suggesting extreme solutions to poverty in Ireland.' },
    { id: 26225, title: 'Fifteen Thousand Useful Phrases', author: 'Grenville Kleiser', genre: 'non-fiction', description: 'A practical handbook of phrases for speakers and writers.' },
    { id: 26184, title: 'Simple Sabotage Field Manual', author: 'United States. Office of Strategic Services', genre: 'non-fiction', description: 'WWII manual on disrupting organizations through subtle sabotage.' },
    { id: 27827, title: 'The Kama Sutra of Vatsyayana', author: 'Vatsyayana', genre: 'non-fiction', description: 'Ancient Indian guide to love, sexuality, and relationships.' },
    { id: 22789, title: 'On the Duties of the Clergy', author: 'Bishop of Milan Saint Ambrose', genre: 'non-fiction', description: 'Advice for Christian clergy on moral and pastoral duties.' },
    { id: 72679, title: 'The lesser Key of Solomon, Goetia, the book of evil spirits', author: 'Anonymous', genre: 'non-fiction', description: 'A grimoire detailing demons and how to summon them.' },
    { id: 16119, title: 'Doctrina Christiana', author: 'Anonymous', genre: 'non-fiction', description: 'Early Tagalog Christian doctrine from the Philippines.' },

    // Mystery
    { id: 1661, title: 'The Adventures of Sherlock Holmes', author: 'Arthur Conan Doyle', genre: 'mystery', description: 'Twelve detective stories featuring the brilliant Sherlock Holmes.' },
    { id: 2852, title: 'The Hound of the Baskervilles', author: 'Arthur Conan Doyle', genre: 'mystery', description: 'Sherlock Holmes solves the mystery of a deadly supernatural hound.' },
    { id: 2148, title: 'The Works of Edgar Allan Poe — Volume 2', author: 'Edgar Allan Poe', genre: 'mystery', description: 'Tales of mystery, horror, and the macabre.' },
    { id: 2554, title: 'Crime and Punishment', author: 'Fyodor Dostoyevsky', genre: 'mystery', description: 'A murderer grapples with guilt and redemption in Russia.' },
    { id: 1184, title: 'The Count of Monte Cristo', author: 'Alexandre Dumas', genre: 'mystery', description: 'A wrongly imprisoned man seeks intricate revenge.' },
    { id: 28054, title: 'The Brothers Karamazov', author: 'Fyodor Dostoyevsky', genre: 'mystery', description: 'A family drama involving murder, faith, and philosophy.' },
    { id: 25344, title: 'The Scarlet Letter', author: 'Nathaniel Hawthorne', genre: 'mystery', description: 'A woman in Puritan society bears a mysterious symbol of shame.' },
    { id: 174, title: 'The Picture of Dorian Gray', author: 'Oscar Wilde', genre: 'mystery', description: 'A man\'s portrait ages while he remains eternally young.' },

    // Sci-Fi
    { id: 84, title: 'Frankenstein; Or, The Modern Prometheus', author: 'Mary Wollstonecraft Shelley', genre: 'sci-fi', description: 'A scientist creates a living being with tragic consequences.' },
    { id: 43, title: 'The Strange Case of Dr. Jekyll and Mr. Hyde', author: 'Robert Louis Stevenson', genre: 'sci-fi', description: 'A doctor\'s experiment unleashes his evil alter ego.' },
    { id: 5200, title: 'Metamorphosis', author: 'Franz Kafka', genre: 'sci-fi', description: 'A man awakens transformed into a giant insect.' },
    { id: 345, title: 'Dracula', author: 'Bram Stoker', genre: 'sci-fi', description: 'A vampire count seeks new blood in Victorian England.' }, // Horror/sci-fi overlap
    { id: 8492, title: 'The King in Yellow', author: 'Robert W. Chambers', genre: 'sci-fi', description: 'Weird tales connected by a mysterious, madness-inducing play.' },
    { id: 10007, title: 'Carmilla', author: 'Joseph Sheridan Le Fanu', genre: 'sci-fi', description: 'A young woman falls under the spell of a female vampire.' },
    { id: 219, title: 'Heart of Darkness', author: 'Joseph Conrad', genre: 'sci-fi', description: 'A journey into the heart of Africa reveals human darkness.' }, // Psychological, but exploratory
    { id: 120, title: 'Treasure Island', author: 'Robert Louis Stevenson', genre: 'sci-fi', description: 'A young boy\'s adventure with pirates and buried treasure.' }, // Adventure with speculative elements

    // Fantasy
    { id: 11, title: 'Alice\'s Adventures in Wonderland', author: 'Lewis Carroll', genre: 'fantasy', description: 'A girl explores a bizarre world full of eccentric characters.' },
    { id: 46, title: 'A Christmas Carol in Prose; Being a Ghost Story of Christmas', author: 'Charles Dickens', genre: 'fantasy', description: 'A miser is reformed by visits from Christmas ghosts.' },
    { id: 2591, title: 'Grimms\' Fairy Tales', author: 'Jacob Grimm and Wilhelm Grimm', genre: 'fantasy', description: 'Classic collection of German folk tales and fairy stories.' },
    { id: 55, title: 'The Wonderful Wizard of Oz', author: 'L. Frank Baum', genre: 'fantasy', description: 'Dorothy\'s magical journey through the land of Oz.' },
    { id: 41, title: 'The Legend of Sleepy Hollow', author: 'Washington Irving', genre: 'fantasy', description: 'A schoolmaster encounters a headless horseman.' },
    { id: 16, title: 'Peter Pan', author: 'J. M. Barrie', genre: 'fantasy', description: 'The eternal boy leads children to Neverland.' },
    { id: 60976, title: 'Rip Van Winkle', author: 'Washington Irving', genre: 'fantasy', description: 'A man sleeps for 20 years and awakens to a changed world.' },
    { id: 829, title: 'Gulliver\'s Travels into Several Remote Nations of the World', author: 'Jonathan Swift', genre: 'fantasy', description: 'Satirical travels to lands of giants, tiny people, and more.' },

    // Classics
    { id: 1342, title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'classics', description: 'A witty romance about love, marriage, and social class.' },
    { id: 2701, title: 'Moby Dick; Or, The Whale', author: 'Herman Melville', genre: 'classics', description: 'A captain\'s obsessive hunt for a giant white whale.' },
    { id: 1513, title: 'Romeo and Juliet', author: 'William Shakespeare', genre: 'classics', description: 'Tragic tale of star-crossed lovers from feuding families.' },
    { id: 100, title: 'The Complete Works of William Shakespeare', author: 'William Shakespeare', genre: 'classics', description: 'All the plays and poems of the Bard.' },
    { id: 37106, title: 'Little Women; Or, Meg, Jo, Beth, and Amy', author: 'Louisa May Alcott', genre: 'classics', description: 'The coming-of-age story of four sisters during the Civil War.' },
    { id: 1260, title: 'Jane Eyre: An Autobiography', author: 'Charlotte Brontë', genre: 'classics', description: 'An orphan finds love and independence as a governess.' },
    { id: 768, title: 'Wuthering Heights', author: 'Emily Brontë', genre: 'classics', description: 'Passionate love and revenge on the Yorkshire moors.' },
    { id: 6130, title: 'The Iliad', author: 'Homer', genre: 'classics', description: 'Epic account of the Trojan War and its heroes.' },

    // History
    { id: 20203, title: 'Autobiography of Benjamin Franklin', author: 'Benjamin Franklin', genre: 'history', description: 'The life and wisdom of an American founding father.' },
    { id: 23, title: 'Narrative of the Life of Frederick Douglass, an American Slave', author: 'Frederick Douglass', genre: 'history', description: 'Autobiography of escape from slavery to abolitionism.' },
    { id: 15399, title: 'The Interesting Narrative of the Life of Olaudah Equiano, Or Gustavus Vassa, The African', author: 'Olaudah Equiano', genre: 'history', description: 'Memoir of an enslaved African who gained freedom.' },
    { id: 408, title: 'The Souls of Black Folk', author: 'W. E. B. Du Bois', genre: 'history', description: 'Essays on race and African American life in the early 20th century.' },
    { id: 5197, title: 'My Life — Volume 1', author: 'Richard Wagner', genre: 'history', description: 'Autobiography of the famous German composer.' },
    { id: 3296, title: 'The Confessions of St. Augustine', author: 'Bishop of Hippo Saint Augustine', genre: 'history', description: 'Spiritual journey and conversion to Christianity.' },
    { id: 2600, title: 'War and Peace', author: 'Leo Tolstoy', genre: 'history', description: 'Epic depiction of Russian society during the Napoleonic Wars.' },
    { id: 98, title: 'A Tale of Two Cities', author: 'Charles Dickens', genre: 'history', description: 'Story set against the backdrop of the French Revolution.' },

    // Philosophy
    { id: 3207, title: 'Leviathan', author: 'Thomas Hobbes', genre: 'philosophy', description: 'Political philosophy advocating for absolute sovereignty.' },
    { id: 1232, title: 'The Prince', author: 'Niccolò Machiavelli', genre: 'philosophy', description: 'Guide to acquiring and maintaining political power.' },
    { id: 1998, title: 'Thus Spake Zarathustra: A Book for All and None', author: 'Friedrich Wilhelm Nietzsche', genre: 'philosophy', description: 'Philosophical novel on the Übermensch and eternal return.' },
    { id: 7370, title: 'Second Treatise of Government', author: 'John Locke', genre: 'philosophy', description: 'Theory of natural rights and government by consent.' },
    { id: 5740, title: 'Tractatus Logico-Philosophicus', author: 'Ludwig Wittgenstein', genre: 'philosophy', description: 'Exploration of language, logic, and the limits of philosophy.' },
    { id: 4363, title: 'Beyond Good and Evil', author: 'Friedrich Wilhelm Nietzsche', genre: 'philosophy', description: 'Critique of morality and traditional philosophy.' },
    { id: 34901, title: 'On Liberty', author: 'John Stuart Mill', genre: 'philosophy', description: 'Defense of individual freedom against societal tyranny.' },
    { id: 8438, title: 'The Ethics of Aristotle', author: 'Aristotle', genre: 'philosophy', description: 'Treatise on virtue, happiness, and ethical living.' }
];

// Group books by genre for rendering
const genres = ['fiction', 'non-fiction', 'mystery', 'sci-fi', 'fantasy', 'classics', 'history', 'philosophy'];
const groupedBooks = genres.reduce((acc, genre) => {
    acc[genre] = books.filter(book => book.genre === genre);
    return acc;
}, {});

// Function to render the book sections dynamically
const main = document.getElementById('book-sections');
genres.forEach(genre => {
    if (groupedBooks[genre].length > 0) {
        const section = document.createElement('section');
        section.id = genre;
        section.className = 'section';
        section.innerHTML = `<h2>${genre.charAt(0).toUpperCase() + genre.slice(1)}</h2><div class="book-grid"></div>`;
        const grid = section.querySelector('.book-grid');
        groupedBooks[genre].forEach(book => {
            const card = document.createElement('div');
            card.className = 'book-card';
            card.innerHTML = `
                <img src="https://www.gutenberg.org/cache/epub/${book.id}/pg${book.id}.cover.medium.jpg" alt="${book.title} Cover" onerror="this.src='https://via.placeholder.com/200x300?text=Book+Cover'">
                <h3>${book.title}</h3>
                <p>By ${book.author}</p>
                <p>${book.description}</p>
                <a href="https://www.gutenberg.org/ebooks/${book.id}" target="_blank">Download</a>
            `;
            grid.appendChild(card);
        });
        main.appendChild(section);
    }
});