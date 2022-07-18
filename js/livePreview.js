$(function () {
        function makePreview() {
          input = $('#input').val();
          $('#preview').html(input);
          MathJax.Hub.Queue(['Typeset', MathJax.Hub, 'preview']);
        }

        $('#input').keyup(function () {
          makePreview();
        });

        $('#preview').on('updated', function () {
          makePreview();
        });

        makePreview();
      });
