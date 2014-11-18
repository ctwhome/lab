<?php
/**
 * @file
 * profile_config.default_breakpoints.inc
 */

/**
 * Implements hook_default_breakpoints().
 */
function profile_config_default_breakpoints() {
  $export = array();

  $breakpoint = new stdClass();
  $breakpoint->disabled = FALSE; /* Edit this to true to make a default breakpoint disabled initially */
  $breakpoint->api_version = 1;
  $breakpoint->machine_name = 'breakpoints.module.navbar.wide';
  $breakpoint->name = 'wide';
  $breakpoint->breakpoint = 'only screen and (min-width: 50em)';
  $breakpoint->source = 'navbar';
  $breakpoint->source_type = 'module';
  $breakpoint->status = 1;
  $breakpoint->weight = 0;
  $breakpoint->multipliers = array(
    '1x' => '1x',
  );
  $export['breakpoints.module.navbar.wide'] = $breakpoint;

  return $export;
}
