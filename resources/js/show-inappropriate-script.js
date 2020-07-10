function showInappropriate() {
    $('.inappropriate').css('list-style', 'disc');
    $('.inappropriate-1').html('Brainf**k&nbsp;&nbsp;<i class="fas fa-brain"></i>');
    $('.inappropriate-2').html('ArnoldC&nbsp;&nbsp;<i class="fas fa-robot"></i>');
    $('.inappropriate-prompt').html(    `<i class="fas fa-lock-open"></i>&nbsp;&nbsp;
                                        <b>(2)</b> entries are showing that may contain inappropriate/unprofessional content. Click <a href="javascript:hideInappropriate();">here</a> to hide this content.   `);
}

function hideInappropriate() {
    $('.inappropriate').css('list-style', 'none');
    $('.inappropriate-1').html(`&nbsp;`);
    $('.inappropriate-2').html(`&nbsp;`);
    $('.inappropriate-prompt').html(    `<i class="fas fa-lock"></i>&nbsp;&nbsp;
                                        <b>(2)</b> entries have been hidden because they may contain inappropriate/unprofessional content. Click <a href="javascript:showInappropriate();">here</a> to show this content.`);
}