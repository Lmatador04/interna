import React from 'react';
import { useForm, ValidationError } from '@statickit/react';
import { i18n, withTranslation } from '../i18n'
import PropTypes from 'prop-types'

function ContactForm({t}) {
  const [state, handleSubmit] = useForm("contactForm");

  if (state.succeeded) {
    return <p> {t('Thanks for joining')}</p>;
  }

  return (
    <>
    <div className="row mb-3">
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">                        
      <h2> {t('Leave a message')}</h2>
    </div>
</div>
<div className="row">
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xs-offset-3 text-center">

    <form onSubmit={handleSubmit}>


    <div className="form-group">
    <div className="input-group mb-2 ">
 <div class="input-group-prepend">
          <div class="input-group-text"><i class="fas fa-user"></i></div>
        </div>
      <input
      className="form-control"
        id="nom"
        type="text" 
        name="nom"
        placeholder="nom"
      />
     
      </div>
      </div>

      <ValidationError 
        prefix="Nom" 
        field="nom"
        errors={state.errors}
      />



<div className="form-group">
    <div className="input-group mb-2 ">
 <div class="input-group-prepend">
          <div class="input-group-text"><i class="fas fa-at"></i></div>
        </div>
        <input
      className="form-control"
        id="email"
        type="email" 
        name="email"
        placeholder="Adresse mail"
      />
      </div>
      </div>

      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <div className="form-group">
    <div className="input-group mb-2 ">
 <div class="input-group-prepend">
          <div class="input-group-text"><i class="fas fa-comments"></i></div>
        </div>
        <textarea className ="form-control"
        id="message"
        name="message"
        placeholder="Message"
      />
      </div>
      </div>
      
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" className="btn btn-success mt-5" disabled={state.submitting}>
         {t('Submit')}
      </button>
    </form>
    </div>
    </div>
   
<style jsx>{
  `
  `
}

</style>

</>


  );
}

ContactForm.getInitialProps = async () => ({
  namespacesRequired: ['contact'],
})

ContactForm.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('contact')(ContactForm)
