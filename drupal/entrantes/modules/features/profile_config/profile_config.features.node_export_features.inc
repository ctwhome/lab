<?php
/**
 * @file
 * profile_config.features.node_export_features.inc
 */

/**
 * Implements hook_node_export_features_default().
 */
function profile_config_node_export_features_default() {
  $node_export = array(
  'code_string' => 'array(
  (object) array(
      \'vid\' => \'3\',
      \'uid\' => \'1\',
      \'title\' => \'Página básica\',
      \'log\' => \'\',
      \'status\' => \'1\',
      \'comment\' => \'1\',
      \'promote\' => \'1\',
      \'sticky\' => \'0\',
      \'vuuid\' => \'b99e6d77-4cee-4c84-9232-296b6cf25987\',
      \'nid\' => \'3\',
      \'type\' => \'pagina_basica\',
      \'language\' => \'es\',
      \'created\' => \'1380726268\',
      \'changed\' => \'1380727351\',
      \'tnid\' => \'0\',
      \'translate\' => \'0\',
      \'uuid\' => \'093bc156-2d4f-47d9-9f52-4b88f13fe0e8\',
      \'revision_timestamp\' => \'1380727351\',
      \'revision_uid\' => \'1\',
      \'body\' => array(
        \'und\' => array(
          array(
            \'value\' => "<h1>hola</h1>\\r\\n\\r\\n<p>qué tal</p>\\r\\n",
            \'summary\' => \'\',
            \'format\' => \'rich_text\',
            \'safe_value\' => "<h1>hola</h1>\\n\\n<p>qué tal</p>\\n",
            \'safe_summary\' => \'\',
          ),
        ),
      ),
      \'rdf_mapping\' => array(
        \'rdftype\' => array(
          \'sioc:Item\',
          \'foaf:Document\',
        ),
        \'title\' => array(
          \'predicates\' => array(
            \'dc:title\',
          ),
        ),
        \'created\' => array(
          \'predicates\' => array(
            \'dc:date\',
            \'dc:created\',
          ),
          \'datatype\' => \'xsd:dateTime\',
          \'callback\' => \'date_iso8601\',
        ),
        \'changed\' => array(
          \'predicates\' => array(
            \'dc:modified\',
          ),
          \'datatype\' => \'xsd:dateTime\',
          \'callback\' => \'date_iso8601\',
        ),
        \'body\' => array(
          \'predicates\' => array(
            \'content:encoded\',
          ),
        ),
        \'uid\' => array(
          \'predicates\' => array(
            \'sioc:has_creator\',
          ),
          \'type\' => \'rel\',
        ),
        \'name\' => array(
          \'predicates\' => array(
            \'foaf:name\',
          ),
        ),
        \'comment_count\' => array(
          \'predicates\' => array(
            \'sioc:num_replies\',
          ),
          \'datatype\' => \'xsd:integer\',
        ),
        \'last_activity\' => array(
          \'predicates\' => array(
            \'sioc:last_activity_date\',
          ),
          \'datatype\' => \'xsd:dateTime\',
          \'callback\' => \'date_iso8601\',
        ),
      ),
      \'panelizer\' => array(
        \'page_manager\' => (object) array(
            \'entity_type\' => \'node\',
            \'entity_id\' => \'3\',
            \'revision_id\' => \'3\',
            \'name\' => \'node:pagina_basica:default\',
            \'no_blocks\' => \'0\',
            \'css_id\' => \'\',
            \'css\' => \'\',
            \'pipeline\' => \'standard\',
            \'contexts\' => array(),
            \'relationships\' => array(),
            \'did\' => \'0\',
            \'view_mode\' => \'page_manager\',
            \'css_class\' => \'\',
            \'title_element\' => \'H2\',
            \'link_to_entity\' => \'1\',
            \'extra\' => array(),
            \'display\' => panels_display::__set_state(array(
               \'args\' => 
              array (
              ),
               \'content\' => 
              array (
                \'new-1\' => 
                stdClass::__set_state(array(
                   \'pid\' => \'new-1\',
                   \'did\' => 0,
                   \'panel\' => \'center\',
                   \'type\' => \'entity_field\',
                   \'subtype\' => \'node:body\',
                   \'shown\' => 1,
                   \'access\' => 
                  array (
                  ),
                   \'configuration\' => 
                  array (
                    \'label\' => \'hidden\',
                    \'formatter\' => \'text_default\',
                    \'delta_limit\' => 0,
                    \'delta_offset\' => \'0\',
                    \'delta_reversed\' => false,
                    \'formatter_settings\' => 
                    array (
                      \'edit\' => 
                      array (
                        \'editor\' => \'direct\',
                      ),
                    ),
                    \'context\' => \'panelizer\',
                  ),
                   \'cache\' => 
                  array (
                  ),
                   \'style\' => 
                  array (
                  ),
                   \'css\' => 
                  array (
                  ),
                   \'extras\' => 
                  array (
                  ),
                   \'position\' => 0,
                   \'locks\' => 
                  array (
                  ),
                )),
                \'new-2\' => 
                stdClass::__set_state(array(
                   \'pid\' => \'new-2\',
                   \'did\' => 0,
                   \'panel\' => \'center\',
                   \'type\' => \'node_links\',
                   \'subtype\' => \'node_links\',
                   \'shown\' => 1,
                   \'access\' => 
                  array (
                  ),
                   \'configuration\' => 
                  array (
                    \'override_title\' => false,
                    \'override_title_text\' => \'\',
                    \'build_mode\' => \'page_manager\',
                    \'identifier\' => \'\',
                    \'link\' => true,
                    \'context\' => \'panelizer\',
                  ),
                   \'cache\' => 
                  array (
                  ),
                   \'style\' => 
                  array (
                  ),
                   \'css\' => 
                  array (
                    \'css_class\' => \'link-wrapper\',
                  ),
                   \'extras\' => 
                  array (
                  ),
                   \'position\' => 0,
                   \'locks\' => 
                  array (
                  ),
                )),
              ),
               \'panels\' => 
              array (
                \'center\' => 
                array (
                  0 => \'new-1\',
                  1 => \'new-2\',
                ),
              ),
               \'incoming_content\' => NULL,
               \'css_id\' => NULL,
               \'context\' => 
              array (
              ),
               \'did\' => \'new\',
               \'renderer\' => \'standard\',
               \'layout\' => \'flexible\',
               \'layout_settings\' => 
              array (
              ),
               \'panel_settings\' => 
              array (
              ),
               \'cache\' => 
              array (
              ),
               \'title\' => \'%node:title\',
               \'hide_title\' => 0,
               \'title_pane\' => 0,
            )),
          ),
      ),
      \'cid\' => \'0\',
      \'last_comment_timestamp\' => \'1380726268\',
      \'last_comment_name\' => NULL,
      \'last_comment_uid\' => \'1\',
      \'comment_count\' => \'0\',
      \'name\' => \'admin\',
      \'picture\' => \'0\',
      \'data\' => \'b:0;\',
      \'path\' => array(
        \'pid\' => \'3\',
        \'source\' => \'node/3\',
        \'alias\' => \'content/página-básica\',
        \'language\' => \'es\',
      ),
      \'menu\' => NULL,
      \'node_export_drupal_version\' => \'7\',
    ),
  (object) array(
      \'vid\' => \'2\',
      \'uid\' => \'1\',
      \'title\' => \'Página de Contacto\',
      \'log\' => \'\',
      \'status\' => \'1\',
      \'comment\' => \'1\',
      \'promote\' => \'1\',
      \'sticky\' => \'0\',
      \'vuuid\' => \'605b3dc7-003d-4956-ae45-53d4c8a33d38\',
      \'nid\' => \'2\',
      \'type\' => \'panel\',
      \'language\' => \'es\',
      \'created\' => \'1380726162\',
      \'changed\' => \'1380726162\',
      \'tnid\' => \'0\',
      \'translate\' => \'0\',
      \'uuid\' => \'5ab9ac51-01a7-48d3-9fd8-efacae2ab188\',
      \'revision_timestamp\' => \'1380726162\',
      \'revision_uid\' => \'1\',
      \'panels_node\' => array(
        \'nid\' => \'2\',
        \'css_id\' => \'\',
        \'did\' => \'2\',
        \'pipeline\' => \'ipe\',
      ),
      \'rdf_mapping\' => array(
        \'rdftype\' => array(
          \'sioc:Item\',
          \'foaf:Document\',
        ),
        \'title\' => array(
          \'predicates\' => array(
            \'dc:title\',
          ),
        ),
        \'created\' => array(
          \'predicates\' => array(
            \'dc:date\',
            \'dc:created\',
          ),
          \'datatype\' => \'xsd:dateTime\',
          \'callback\' => \'date_iso8601\',
        ),
        \'changed\' => array(
          \'predicates\' => array(
            \'dc:modified\',
          ),
          \'datatype\' => \'xsd:dateTime\',
          \'callback\' => \'date_iso8601\',
        ),
        \'body\' => array(
          \'predicates\' => array(
            \'content:encoded\',
          ),
        ),
        \'uid\' => array(
          \'predicates\' => array(
            \'sioc:has_creator\',
          ),
          \'type\' => \'rel\',
        ),
        \'name\' => array(
          \'predicates\' => array(
            \'foaf:name\',
          ),
        ),
        \'comment_count\' => array(
          \'predicates\' => array(
            \'sioc:num_replies\',
          ),
          \'datatype\' => \'xsd:integer\',
        ),
        \'last_activity\' => array(
          \'predicates\' => array(
            \'sioc:last_activity_date\',
          ),
          \'datatype\' => \'xsd:dateTime\',
          \'callback\' => \'date_iso8601\',
        ),
      ),
      \'cid\' => \'0\',
      \'last_comment_timestamp\' => \'1380726162\',
      \'last_comment_name\' => NULL,
      \'last_comment_uid\' => \'1\',
      \'comment_count\' => \'0\',
      \'name\' => \'admin\',
      \'picture\' => \'0\',
      \'data\' => \'b:0;\',
      \'path\' => array(
        \'pid\' => \'2\',
        \'source\' => \'node/2\',
        \'alias\' => \'content/página-de-contacto\',
        \'language\' => \'es\',
      ),
      \'menu\' => NULL,
      \'node_export_drupal_version\' => \'7\',
    ),
  (object) array(
      \'vid\' => \'1\',
      \'uid\' => \'1\',
      \'title\' => \'Página de ejemplo con columnas flexbles\',
      \'log\' => \'\',
      \'status\' => \'1\',
      \'comment\' => \'1\',
      \'promote\' => \'1\',
      \'sticky\' => \'0\',
      \'vuuid\' => \'311a24b2-627d-48d9-9d8f-441ce792658b\',
      \'nid\' => \'1\',
      \'type\' => \'panel\',
      \'language\' => \'es\',
      \'created\' => \'1380723806\',
      \'changed\' => \'1380723819\',
      \'tnid\' => \'0\',
      \'translate\' => \'0\',
      \'uuid\' => \'87ec6eb8-8d7c-4877-88d1-ba1ad7cadca2\',
      \'revision_timestamp\' => \'1380723819\',
      \'revision_uid\' => \'1\',
      \'panels_node\' => array(
        \'nid\' => \'1\',
        \'css_id\' => \'\',
        \'did\' => \'1\',
        \'pipeline\' => \'ipe\',
      ),
      \'rdf_mapping\' => array(
        \'rdftype\' => array(
          \'sioc:Item\',
          \'foaf:Document\',
        ),
        \'title\' => array(
          \'predicates\' => array(
            \'dc:title\',
          ),
        ),
        \'created\' => array(
          \'predicates\' => array(
            \'dc:date\',
            \'dc:created\',
          ),
          \'datatype\' => \'xsd:dateTime\',
          \'callback\' => \'date_iso8601\',
        ),
        \'changed\' => array(
          \'predicates\' => array(
            \'dc:modified\',
          ),
          \'datatype\' => \'xsd:dateTime\',
          \'callback\' => \'date_iso8601\',
        ),
        \'body\' => array(
          \'predicates\' => array(
            \'content:encoded\',
          ),
        ),
        \'uid\' => array(
          \'predicates\' => array(
            \'sioc:has_creator\',
          ),
          \'type\' => \'rel\',
        ),
        \'name\' => array(
          \'predicates\' => array(
            \'foaf:name\',
          ),
        ),
        \'comment_count\' => array(
          \'predicates\' => array(
            \'sioc:num_replies\',
          ),
          \'datatype\' => \'xsd:integer\',
        ),
        \'last_activity\' => array(
          \'predicates\' => array(
            \'sioc:last_activity_date\',
          ),
          \'datatype\' => \'xsd:dateTime\',
          \'callback\' => \'date_iso8601\',
        ),
      ),
      \'cid\' => \'0\',
      \'last_comment_timestamp\' => \'1380723806\',
      \'last_comment_name\' => NULL,
      \'last_comment_uid\' => \'1\',
      \'comment_count\' => \'0\',
      \'name\' => \'admin\',
      \'picture\' => \'0\',
      \'data\' => \'b:0;\',
      \'path\' => array(
        \'pid\' => \'1\',
        \'source\' => \'node/1\',
        \'alias\' => \'content/página-de-ejemplo-con-columnas-flexbles\',
        \'language\' => \'es\',
      ),
      \'menu\' => array(
        \'link_title\' => \'Página de ejemplo con columnas flexbles\',
        \'mlid\' => 0,
        \'plid\' => \'0\',
        \'menu_name\' => \'main-menu\',
        \'weight\' => \'0\',
        \'options\' => array(),
        \'module\' => \'menu\',
        \'expanded\' => \'0\',
        \'hidden\' => \'0\',
        \'has_children\' => \'0\',
        \'customized\' => 0,
        \'parent_depth_limit\' => 8,
        \'description\' => \'\',
        \'enabled\' => 1,
      ),
      \'node_export_drupal_version\' => \'7\',
    ),
)',
);
  return $node_export;
}
