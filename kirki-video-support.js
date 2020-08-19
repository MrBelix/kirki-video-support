jQuery(function ($) {
    function inlineVideoBG() {

        // Common Inline CSS
        $(".single-page-header, .intro-banner").each(function () {
            var attrImageBG = $(this).attr('data-background-image');

            let extensions = [
                'mpg',
                'mpeg',
                'avi',
                'wmv',
                'mov',
                'rm',
                'ram',
                'swf',
                'flv',
                'ogg',
                'webm',
                'mp4'
            ]

            if (attrImageBG !== undefined && extensions.includes(attrImageBG.split('.').pop())) {

                $(this).find('.background-image-container').remove();
                $(this).append('<div class="background-image-container"></div>');
                $('.background-image-container').append(`
                <video autoplay="" muted="" loop="">
                    <source src="${attrImageBG}">
                </video>`);
            }
        });

    }

    inlineVideoBG();
});