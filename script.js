document.addEventListener('DOMContentLoaded', () => {
    const data = {
        status: "ok",
        totalResults: 4,
        articles: [
            {
                source: { id: null, name: "Forbes" },
                author: "Sasha Lekach, Contributor",
                title: "Ford Throws In Free Home Charging Unit And Installation For Its EVs",
                description: "Customers who buy a new Ford EV will receive a free home charger and installation as part of a new Ford program to encourage EV adoption.",
                url: "https://www.forbes.com/sites/sashalekach/2024/10/01/ford-throws-in-free-home-charging-unit-and-installation-for-its-evs/",
                urlToImage: "https://imageio.forbes.com/specials-images/imageserve/66fb1aa95281c601b6ce8e7e/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
                publishedAt: "2024-10-01T05:26:52Z",
                content: "Home charging should get easier with Ford's new included charger..."
            },
            {
                source: { id: null, name: "New Atlas" },
                author: "Loz Blain",
                title: "Bigger, stronger, smarter GR-2 humanoid also gets major hand upgrades",
                description: "One of the more interesting and unique robots in the emerging humanoid space has received an unexpected upgrade. Shanghai's Fourier Intelligence has just launched the GR-2 – taller, heavier, smarter, more dextrous and much stronger than the GR-1.",
                url: "https://newatlas.com/ai-humanoids/fourier-gr-2-humanoid-robot/",
                urlToImage: "https://assets.newatlas.com/dims4/default/f5e6e44/2147483647/strip/true/crop/3369x1769+0+63/resize/1200x630!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Fdd%2Ff4%2Fb0ec9f0242bb9b5ba7a68817ad87%2Fc054022c288c4e58de81ff610d6f4c0b.jpg&na.image_optimisation=0",
                publishedAt: "2024-10-01T05:21:58Z",
                content: "Shanghai's Fourier Intelligence has just launched the GR-2 – taller, heavier, smarter, more dextrous and much stronger than the GR-1."
            },
            {
                source: { id: null, name: "NDTV News" },
                author: "Agence France-Presse",
                title: "Google Unveils $1 Billion Investment In Thailand's Digital Infrastructure",
                description: "Google plans to invest $1 billion to build digital infrastructure in Thailand, including a new data centre.",
                url: "https://www.ndtv.com/world-news/google-unveils-1-billion-investment-in-thailands-digital-infrastructure-6689700",
                urlToImage: "https://c.ndtvimg.com/2024-08/sfbav33o_google-_625x300_29_August_24.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=738",
                publishedAt: "2024-10-01T05:18:16Z",
                content: "Google plans to invest $1 billion to build digital infrastructure in Thailand, including a new data centre."
            },
            {
                source: { id: null, name: "Pilatesanytime.com" },
                author: null,
                title: "Dane Sorensen - Creating Magic Reformer (40 mins) - Level 2",
                description: "Get ready to create magic in this full-body Reformer workout with Dane Sorensen.",
                url: "https://www.pilatesanytime.com/class-view/5682/video/Pilates-Creating-Magic-Reformer-by-Dane-Sorensen",
                urlToImage: "https://images.pilatesanytime.com/2024/07/10/large_danesorenson8427TIMG31861-49283.jpg",
                publishedAt: "2024-10-01T05:00:00Z",
                content: "Get ready to create magic in this full-body Reformer workout with Dane Sorensen."
            }
        ]
    };

    const fetchNewsBtn = document.getElementById('fetchBtn');
    const newsContainer = document.getElementById('newsContainer');
    let articles = data.articles;

    function renderRandomArticle() {
        newsContainer.innerHTML = ''; 
        if (articles.length > 0) {
            const randomIndex = Math.floor(Math.random() * articles.length);
            const article = articles[randomIndex];
            const articleElement = document.createElement('div');
            articleElement.className = 'news-item';
            articleElement.innerHTML = `
                <h2>${article.title}</h2>
                <p>${article.description}</p>
                <img src="${article.urlToImage}" alt="${article.title}">
                <p><a href="${article.url}" target="_blank">Read more</a></p>
            `;
            newsContainer.appendChild(articleElement);
        } else {
            newsContainer.innerHTML = '<p>No articles available.</p>';
        }
    }

    fetchNewsBtn.addEventListener('click', renderRandomArticle);
});