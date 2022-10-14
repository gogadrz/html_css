(() => {
  document.addEventListener('DOMContentLoaded', () => {

    const getDomainsBtn = document.querySelector('.btn');
    // console.log(getDomainsBtn);

    getDomainsBtn.addEventListener('click', () => {
      const links = getPageLinksDomains();
      console.log(links);
    });

    function getPageLinksDomains() {
      return Array.from(document.getElementsByTagName('a'))
      .map(link => link.href
        .replace('http://', '')
        .replace('https://', '')
        .replace('www.', '')
        .split('/')
        .shift()
        )

        .reduce((uniqueDomains, domain) => {
          if (uniqueDomains.includes(domain)) return uniqueDomains;
          return [...uniqueDomains, domain];
        }, []);
    }

  });
})();
