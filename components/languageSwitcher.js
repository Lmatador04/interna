import {i18n} from '../i18n';

import {useContext} from 'react';

function LanguageSwitcher(){
    
    return(
        <LanguageSwitcher>
            <button
          type='button'
          onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en')}
        >
          {t('change-locale')}
        </button>
    
    </LanguageSwitcher>
    )
}


export default LanguageSwitcher