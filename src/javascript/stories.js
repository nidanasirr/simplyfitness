$(document).ready(function() {
  $.getJSON('../JQuery/successstories.json', function(data) {
    var storiesHtml = '';

    $.each(data.stories, function(index, story) {
      let firstSentenceEnd = story.content.indexOf('. ') + 1;
      let firstSentence = story.content.substring(0, firstSentenceEnd);
      let restOfContent = story.content.substring(firstSentenceEnd);

      storiesHtml += '<div class="story">';
      storiesHtml += '<h3>' + story.title + '</h3>';
      storiesHtml += '<p><span class="first-sentence">' + firstSentence + '</span><span class="rest-of-story" style="display:none;">' + restOfContent + '</span></p>';
      storiesHtml += '<div class="read-more-container"><button class="read-more-btn">Read More</button></div>';
      storiesHtml += '</div>';
    });

    $('#success-stories-container').html(storiesHtml);

    $('.read-more-btn').click(function() {
      $(this).parent().prev('p').find('.rest-of-story').slideToggle();
      $(this).text($(this).text() == 'Read More' ? 'Read Less' : 'Read More');
    });
  });
});
