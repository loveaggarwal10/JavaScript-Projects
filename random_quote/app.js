const quotes = [
    "The best way to predict the future is to invent it. - Alan Kay",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "In the middle of every difficulty lies opportunity. - Albert Einstein",
    "The journey of a thousand miles begins with one step. - Lao Tzu",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "The best revenge is massive success. - Frank Sinatra",
    "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
    "The best way to find yourself is to lose yourself in the service of others. - Mahatma Gandhi",
    "Ignorance is bliss. - Thomas Paine",
    "The world operates on sheep mentality, and I hate it.",
    "If men were perfectly virtuous, they wouldn’t have friends.",
    "The world is a dangerous place, not because of those who do evil, but because of those who look on and do nothing. - Albert Einstein",
    "The only thing necessary for the triumph of evil is for good men to do nothing. - Edmund Burke",
    "The best way to predict your future is to create it. - Abraham Lincoln",
    "It always seems impossible until it's done. - Nelson Mandela"
];
const button = document.querySelector('button');
const quote = document.querySelector('h1');
button.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * 20);
    quote.textContent = quotes[randomIndex];
    
});