//@flow
import React from 'react';
import Icon from 'app/components/Icon';

import { DisplayVisionShort } from './subcomponents/DisplayVision';
import TextWithRedTitle, { TextWithTitle } from './subcomponents/TextWithTitle';
import Statistic from './subcomponents/Statistic';
import EmailItem from './subcomponents/EmailItem';
import banner from 'app/assets/about-us-banner.png';
import styles from './LandingPage.css';

type Props = {
  whoWeAre: string,
  whatWeDo: string,
  whyWeDoIt: string,
  postAddress: string,
  officeHours: string,
  officeAddress: string,
  webkomOfficeAddress: string,
  organizationNo: string
};

const LandingPage = ({
  whoWeAre,
  whatWeDo,
  whyWeDoIt,
  postAddress,
  officeHours,
  officeAddress,
  webkomOfficeAddress,
  organizationNo
}: Props) => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.topContainer}>
        <a href="#contact" className={styles.contactUsLink}>
          Kontakt oss
        </a>
      </div>
      <img
        className={styles.banner}
        src={banner}
        alt="Abakus - Linjeforeningen for Datateknologi og Kommunikasjonsteknologi ved NTNU"
      />

      <div className={styles.whoWhatWhyContainer}>
        <TextWithRedTitle title="Hvem vi er" text={whoWeAre} />
        <TextWithRedTitle title="Hva vi gjør" text={whatWeDo} />
        <TextWithRedTitle title="Hvorfor vi gjør det" text={whyWeDoIt} />
      </div>

      <div className={styles.statisticsContainer}>
        <Statistic statistic="9" label="Komiteer" />
        <Statistic statistic="13" label="Undergrupper" />
        <Statistic statistic="16" label="Interessegrupper" />
        <Statistic statistic="900+" label="Medlemmer" />
        <Statistic topLabel="Stiftet i" statistic="1977" label="41 år" />
      </div>

      <DisplayVisionShort />

      <div className={styles.contactTitleContainer}>
        <h2 className={styles.contactTitle} id="contact">
          Kontakt oss
        </h2>
      </div>

      <div className={styles.locationContainer}>
        <div className={styles.emailIcon}>
          <Icon name="home" size={80} style={{ marginRight: '1rem' }} />
        </div>
        <TextWithTitle
          title="Postadresse"
          text={postAddress}
          extraStyle={{ flexBasis: '33.33333%' }}
        />
        <div style={{ flexBasis: '33.33333%' }}>
          <TextWithTitle title="Besøksadresse" text={officeAddress} />
          <TextWithTitle
            title="Webkom's besøksadresse"
            text={webkomOfficeAddress}
          />
        </div>
        <TextWithTitle
          title="Kontortid"
          text={officeHours}
          extraStyle={{ flexBasis: '33.33333%' }}
        />
      </div>

      <div className={styles.emailContainer}>
        <Icon name="mail" size={80} className={styles.emailIcon} />
        <div className={styles.emails}>
          <h3 className={styles.title}>E-post</h3>
          <EmailItem
            recipient="Hovedstyret"
            email="abakus@abakus.no"
            logo="https://raw.githubusercontent.com/webkom/lego/master/assets/abakus_hs.png"
          />

          <h3 className={styles.title}>E-postadresser til komiteene</h3>
          <div className={styles.committeeEmails}>
            <EmailItem
              recipient="Arrkom"
              email="arrkom@abakus.no"
              logo="https://raw.githubusercontent.com/webkom/lego/master/assets/abakus_arrkom.png"
            />
            <EmailItem
              recipient="PR"
              email="pr@abakus.no"
              logo="https://raw.githubusercontent.com/webkom/lego/master/assets/abakus_pr.png"
            />
            <EmailItem
              recipient="Koskom"
              email="koskom@abakus.no"
              logo="https://raw.githubusercontent.com/webkom/lego/master/assets/abakus_koskom.png"
            />
            <EmailItem
              recipient="Bedkom"
              email="bedkom@abakus.no"
              logo="https://raw.githubusercontent.com/webkom/lego/master/assets/abakus_bedkom.png"
            />
            <EmailItem
              recipient="LaBamba"
              email="labamba@abakus.no"
              logo="https://raw.githubusercontent.com/webkom/lego/master/assets/abakus_labamba.png"
            />
            <EmailItem
              recipient="Webkom"
              email="webkom@abakus.no"
              logo="https://raw.githubusercontent.com/webkom/lego/master/assets/abakus_webkom.png"
            />
            <EmailItem
              recipient="Fagkom"
              email="fagkom@abakus.no"
              logo="https://raw.githubusercontent.com/webkom/lego/master/assets/abakus_fagkom.png"
            />
            <EmailItem
              recipient="readme"
              email="readme@abakus.no"
              logo="https://raw.githubusercontent.com/webkom/lego/master/assets/abakus_readme.png"
            />
            <EmailItem
              recipient="backup"
              email="backup@abakus.no"
              logo="https://raw.githubusercontent.com/webkom/lego/master/assets/abakus_backup.png"
            />
          </div>
        </div>
      </div>

      <div className={styles.organizationContainer}>
        <Icon name="briefcase" size={80} style={{ marginRight: '1rem' }} />
        <div className={styles.organization}>
          <h3 className={styles.title}>Organisasjonsnummer</h3>
          <span>{organizationNo}</span>
        </div>
      </div>
    </div>
  );
};

LandingPage.defaultProps = {
  whoWeAre:
    'Abakus er linjeforeningen for studentene ved Datateknologi og Kommunikasjonsteknologi på NTNU, og drives av studenter ved disse studiene.',
  whatWeDo:
    "Abakus' formål er å disse studentene veiledning i studiesituasjonen, arrangere kurs som utfyller fagtilbudet ved NTNU, fremme kontakten med næringslivet og bidra med sosiale aktiviteter.",
  whyWeDoIt:
    'Vi jobber for å være et mangfoldig miljø og aktivitetstilbud, med muligheter for alle våre studenter, og et sted morgendagens IT-studenter vil være.',
  postAddress: 'Abakus \nSem Sælands vei 7-9 \n7491 Trondheim',
  officeAddress: 'Realfagsbygget A-blokka \nTredje etasje, rom A3.133',
  webkomOfficeAddress:
    'EL-bygget rom F-252 \nO.S. Bragstads plass 2F \nNTNU Gløshaugen',
  officeHours: 'Hver torsdag kl. 1215 - 1300',
  organizationNo: '98 60 37 314 MVA'
};

export default LandingPage;
