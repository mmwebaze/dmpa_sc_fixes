/**
 * @file
 * Attaches behaviors for the Block Bootstrap panel.
 *
 */

(function ($, Drupal) {

  'use strict';

  /**
   * Prevent panel from closing click inside.
   *
   */
  Drupal.behaviors.BlockBootstrappanel = {
    attach: function (context) {
      $(document).on('click', '.block-bootstrap-panel .panel-menu', function(e) {
        e.stopPropagation()
      })
    }
  };

})(jQuery, Drupal);
