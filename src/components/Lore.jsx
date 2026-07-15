import SectionHeader from './SectionHeader';
import ApexStats from './ApexStats';

export default function Lore() {
  return <section className="section" id="lore"><SectionHeader index="05" label="PLAYER DATA" title="Apex" outline="record." /><div className="reveal"><ApexStats /></div></section>;
}
