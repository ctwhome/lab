<?php
/**
 * @file
 * profile_config.bean.inc
 */

/**
 * Implements hook_bean_admin_ui_types().
 */
function profile_config_bean_admin_ui_types() {
  $export = array();

  $bean_type = new stdClass();
  $bean_type->disabled = FALSE; /* Edit this to true to make a default bean_type disabled initially */
  $bean_type->api_version = 5;
  $bean_type->name = 'bloques_estaticos';
  $bean_type->label = 'Bloques Estaticos';
  $bean_type->options = '';
  $bean_type->description = 'Tipos de bloques estáticos';
  $export['bloques_estaticos'] = $bean_type;

  return $export;
}
