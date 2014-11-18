<?php
/**
 * @file
 * profile_config.features.filter.inc
 */

/**
 * Implements hook_filter_default_formats().
 */
function profile_config_filter_default_formats() {
  $formats = array();

  // Exported format: Especific HTML.
  $formats['especific_html'] = array(
    'format' => 'especific_html',
    'name' => 'Especific HTML',
    'cache' => 1,
    'status' => 1,
    'weight' => -9,
    'filters' => array(),
  );

  // Exported format: Plain text.
  $formats['plain_text'] = array(
    'format' => 'plain_text',
    'name' => 'Plain text',
    'cache' => 1,
    'status' => 1,
    'weight' => -8,
    'filters' => array(
      'filter_html_escape' => array(
        'weight' => 0,
        'status' => 1,
        'settings' => array(),
      ),
      'filter_url' => array(
        'weight' => 1,
        'status' => 1,
        'settings' => array(
          'filter_url_length' => 72,
        ),
      ),
      'filter_autop' => array(
        'weight' => 2,
        'status' => 1,
        'settings' => array(),
      ),
    ),
  );

  // Exported format: Rich Text.
  $formats['rich_text'] = array(
    'format' => 'rich_text',
    'name' => 'Rich Text',
    'cache' => 1,
    'status' => 1,
    'weight' => -10,
    'filters' => array(),
  );

  return $formats;
}
