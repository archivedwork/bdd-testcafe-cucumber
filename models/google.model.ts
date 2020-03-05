import { $ } from '../utils';

export class GooglePageModel{
    url() {
        return 'https://google.com/';
    }

    searchBox(){
        return $('input[name="q"]')
    }

    searchButton(){
        return $('')
    }
}
