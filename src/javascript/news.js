$(document).ready(function() {
    var apiKey = '488d28c728474618b01eccf964aad658';
    var url = 'https://newsapi.org/v2/everything?q=workout&searchIntitle=fitness&sortBy=popularity&language=en&apiKey=' + apiKey;

    $.ajax({
        url: url,
        method: 'GET',
        success: function(data) {
            var articles = data.articles;
            var newsHtml = '';
            $.each(articles, function(index, article) {
                // Check if title or description contains 'Removed' and skip if true
                if (!article.title.includes('Removed') && !article.description.includes('Removed')) {
                    newsHtml += `
                        <div class="news-item">
                            <h3><a href="${article.url}" target="_blank">${article.title}</a></h3>
                            <p>${article.description}</p>
                        </div>
                    `;
                }
            });
            $('#news-container').html(newsHtml);
        },
        error: function() {
            console.log('Failed to load news articles.');
        }
    });
});
