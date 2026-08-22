/**
 * Clean and Stuff - Service Area Checker
 */
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('service-area-form');
  const input = document.getElementById('service-area-input');
  const resultElem = document.getElementById('service-area-result');

  if (!form || !input || !resultElem) return;

  // Central Texas / Austin Metro Service Area Data (512 area)
  const serviceZips = [
    '78701', '78702', '78703', '78704', '78705', '78712', '78721', '78722', '78723', '78724',
    '78725', '78726', '78727', '78728', '78729', '78730', '78731', '78732', '78733', '78734',
    '78735', '78736', '78737', '78738', '78739', '78741', '78742', '78744', '78745', '78746',
    '78747', '78748', '78749', '78750', '78751', '78752', '78753', '78754', '78756', '78757',
    '78758', '78759', '78613', '78641', '78660', '78664', '78681', '78626', '78628', '78633',
    '78610', '78640', '78653', '78634', '78620', '78645', '78669'
  ];

  const serviceCities = [
    'austin', 'round rock', 'cedar park', 'pflugerville', 'georgetown',
    'buda', 'kyle', 'leander', 'lakeway', 'bee cave', 'west lake hills',
    'manor', 'hutto', 'dripping springs', 'del valle', 'lago vista'
  ];

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = input.value.trim().toLowerCase();

    if (!query) {
      resultElem.innerHTML = '<span style="color: #f59e0b;">Please enter a zip code or city name.</span>';
      return;
    }

    const isZipMatch = serviceZips.includes(query);
    const isCityMatch = serviceCities.some(city => query.includes(city) || city.includes(query));

    if (isZipMatch || isCityMatch) {
      resultElem.innerHTML = `
        <span style="color: #059669; display: inline-flex; align-items: center; gap: 0.4rem;">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
          <strong>Yes! We provide full cleaning services in your area.</strong>
        </span>
      `;
    } else {
      resultElem.innerHTML = `
        <span style="color: #0284c7; display: inline-flex; align-items: center; gap: 0.4rem;">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          We service throughout Central Texas! Call or text <strong>512-351-6477</strong> to confirm your specific location.
        </span>
      `;
    }
  });
});
