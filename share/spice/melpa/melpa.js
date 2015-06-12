(function (env) {
    "use strict";
    env.ddg_spice_melpa = function(api_result){

        if (!api_result || api_result.error) {
            return Spice.failed('melpa');
        }

        Spice.add({
            id: "melpa",
            name: "Melpa",
            data: api_result,
            meta: {
                sourceName: "melpa",
                sourceUrl: 'http://melpa.org/#' + api_result.data
            },
            templates: {
                group: 'text',
                options: {
                    content: Spice.melpa.content,
                    moreAt: true
                }
            }
        });
    };
}(this));
