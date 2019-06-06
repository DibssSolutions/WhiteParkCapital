import {OPEN, ACTIVE, BODY} from './../constants';

;(() => {

  const controls = $('[data-modal-control]');
  const modals = $('[data-modal]');
  controls.each((i, control) => {
    control = $(control);
    const modal = modals.filter(`[data-modal="${control.data('modal-control')}"]`);

    control.on('click', e => {
      e.preventDefault();
      BODY.addClass('is-open-popup');
      if (!control.hasClass(ACTIVE)) {
        modals.removeClass(OPEN);
        modal.addClass(OPEN);
        controls.removeClass(ACTIVE);
        control.addClass(ACTIVE);
        BODY.addClass('is-open-popup');
      }
      else {
        modal.removeClass(OPEN);
        control.removeClass(ACTIVE);
        BODY.removeClass('is-open-popup');
      }
    });
  });

  modals.each((i, modal) => {
    modal = $(modal);
    const inner = modal.find('[data-modal-container]');
    const close = modal.find('[data-modal-close]');

    const hide = () => {
      modal.removeClass(OPEN);
      BODY.removeClass('is-open-popup');
      controls.removeClass(ACTIVE);
    };

    modal.on('click', e => {
      if ($(e.target).closest('[data-modal-container]').length || $(e.target).closest('[data-modal-close]').length || $(e.target).closest('[data-modal-control]').length ) return;
      hide();
    });

    close.on('click', e => {
      e.preventDefault();
      hide();
    });
  });
})();
