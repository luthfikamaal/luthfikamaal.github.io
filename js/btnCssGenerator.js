$(document).ready(function () {
  $('.style').change(function () {
    addStyle();
  });
  function addStyle() {
    $('.button').css({
      padding: $('#padding-y').val() + 'px ' + $('#padding-x').val() + 'px ',
      'background-color': $('#background-color').val(),
      color: $('#color').val(),
      'font-size': $('#font-size').val() + 'px',
      border: $('#border-width').val() + 'px ' + $('#border-style').val() + ' ' + $('#border-color').val(),
      'border-radius': $('#border-radius').val() + 'px',
      transition: 'all 0.3s',
    });
  }
  function getCode() {
    let padding = $('#padding-y').val() + 'px ' + $('#padding-x').val() + 'px ';
    let color = $('#color').val();
    let bgColor = $('#background-color').val();
    let fontSize = $('#font-size').val() + 'px';
    let border = $('#border-width').val() + 'px ' + $('#border-style').val() + ' ' + $('#border-color').val();
    let borderRadius = $('#border-radius').val() + 'px';
    let transition = 'all 0.3s';
    let colorHover = $('#color-hover').val();
    let bgColorHover = $('#bg-color-hover').val();
    let styleCss =
      `
        .button {
          padding:` +
      padding +
      `;
          color: ` +
      color +
      `;
          background-color: ` +
      bgColor +
      `;
          font-size: ` +
      fontSize +
      `;
          border: ` +
      border +
      `;
          border-radius: ` +
      borderRadius +
      `;
          transition: ` +
      transition +
      `;
        }`;
    let styleCssHover =
      `
        .button:hover {
          color: ` +
      colorHover +
      `;
          background-color: ` +
      bgColorHover +
      `;
        }`;
    $('#result-code').html(styleCss + '<br><br>' + styleCssHover);
  }
  function addHoverStyle() {
    $('.button').css({
      'background-color': $('#bg-color-hover').val(),
      color: $('#color-hover').val(),
    });
  }
  $('.button')
    .mouseenter(function () {
      addHoverStyle();
    })
    .mouseleave(function () {
      addStyle();
    });

  $('#get-code').click(function () {
    getCode();
  });
});
