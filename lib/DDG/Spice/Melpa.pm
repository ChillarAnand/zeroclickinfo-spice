package DDG::Spice::Melpa;
# ABSTRACT: Returns package information from melpa package manager's registry.

use DDG::Spice;

triggers startend => 'melpa';

spice to => 'http://melpa.org/recipes.json';

spice wrap_jsonp_callback => 1;

handle remainder => sub {
    return $_ if $_;
    return;
};

1;




