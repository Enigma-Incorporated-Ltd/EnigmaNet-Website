import './pricing-table.css';

interface PriceRow {
  option: string;
  naasMonthly: string;
  hardwareBuyout: string;
  details: string;
}

const PRICING_DATA: PriceRow[] = [
  {
    option: 'Lite',
    naasMonthly: '£ 149/site',
    hardwareBuyout: '£ 1 , 199 once',
    details: 'Includes basic support; upgradeable anytime'
  },
  {
    option: 'Pro',
    naasMonthly: '£ 299/site',
    hardwareBuyout: '£ 1 , 899 once',
    details: 'Best for multi-WAN up to 1 Gbps'
  },
  {
    option: 'Max',
    naasMonthly: '£ 599/site',
    hardwareBuyout: '£ 2 , 999 once',
    details: 'High availability and 2 Gbps+'
  }
];

const PricingTable = () => {
  return (
    <section className="pricing-table-section" data-name="price">
      {/* Title */}
      <h2 className="pricing-table__title">EDGE Price</h2>

      {/* Table Wrapper */}
      <div className="pricing-table__wrapper">
        <table className="pricing-table__el">
          <thead>
            <tr>
              <th>Option</th>
              <th>NaaS Monthly</th>
              <th>Hardware Buy-out</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {PRICING_DATA.map((row) => (
              <tr key={row.option}>
                <td>{row.option}</td>
                <td>{row.naasMonthly}</td>
                <td>{row.hardwareBuyout}</td>
                <td>{row.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default PricingTable;
