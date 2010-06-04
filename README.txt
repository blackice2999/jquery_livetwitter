-- SUMMARY --

The jquery_livetwitter module provide two blocks to display a twitter live search feed.
It´s using the javascript code from: http://github.com/elektronaut/jquery.livetwitter
You can use the both blocks or you can use the theme functions to display the feed.

-- REQUIREMENTS --

jquery.livetwitter code from: http://github.com/elektronaut/jquery.livetwitter (tested with v1.5.0)


-- INSTALLATION --
install like any other module in drupal and extract the jquery.livetwitter library to
sites/all/libraries/jquery.livetwitter

-- CONFIGURATION --

Go to Administer > Site building > blocks and activate the "jQuery Livetwitter #hashtag search" or
the "jQuery Livetwitter user timeline" block. You can configure both block seperatly. Current Options are

- Hashtags (or Username)
  enter the hashtag for the live feed (or the username on user timeline block)
  
- item count
	the amount of items you would displayed on same time.
	
- Update rate
	the update rate, a little warning the js lib before 1.5.0 uses seconds as time,
	the new version uses milliseconds so dont wonder if you enter 5 that you firefox
	will be run into memory out if you uses the 1.5.0 library.

- Show Author
	display or hide the twitter author on tweets
	
	
-- CODE USAGE --
you can display the both block directly from code by using the theme functions

Display the Hashtag Live Search Block:
- theme('jquery_livetwitter_block_hashtag', $settings = array());
  the theme function uses the configuration from block settings, but you can override it with the settings array.

Display the User Timeline Block:
- theme('jquery_livetwitter_block_user_timeline', $settings = array());
  the theme function uses the configuration from block settings, but you can override it with the settings array.

Manual theme function:
- theme('jquery_livetwitter', $id = 'my_id', $settings = array());
  if you dont want to uses one of the blocks because of own settings array you can uses this theme function.
  Both Parameters are required.
    @param: $id (string) (required) - the id of the livetwitter element.
            it will be used for the div container element and the jquery plugin call.

    @param: $settings (array) (required) - a settings array which can contain the keys:
            - limit (int) maximum tweets to show
            - rate  (int) time in seconds for refresh
            - showAuthor (boolean) true to display the Twitter Author of tweet
            - mode (string) - hashtag or user_timeline
            - query (string) - for hashtag use comma seperated list, username (only one) for user_timeline
  
  Example:
  
  <?php
  print theme('jquery_livetwitter', 'twitter-feed', array(
    'limit' => 10,
    'rate' => 10000,
    'showAuthor' => TRUE,
    'mode' => 'hashtag',
    'query' => 'drupal',
  ));
  ?>