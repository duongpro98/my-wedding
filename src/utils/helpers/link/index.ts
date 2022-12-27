export const isValidLinkObject = (link) => Boolean(link?.url);

export const getLink = (link) => {
  if (isValidLinkObject(link)) {
    return {
      ...link,
      ...(Boolean(link.linkType && typeof link.linkType === 'string') && {
        type: link.linkType.toLowerCase()
      }),
      ...(Boolean(link.linktype && typeof link.linktype === 'string') && {
        type: link.linktype.toLowerCase()
      }),
      ...(Boolean(link.type && typeof link.type === 'string') && {
        type: link.type.toLowerCase()
      })
    };
  } else if (typeof link === 'string' && Boolean(link)) {
    let linkObj: any = {
      url: link
    };

    if (!link.startsWith('/')) {
      linkObj.type = 'external';
      linkObj.target = '_blank';
    }

    return linkObj;
  } else if (link && typeof link === 'object') {
    // handle yet another format of links
    let linkObj: any = {
      ...link
    };

    if (link.hasOwnProperty('href')) {
      linkObj.url = link.href;
    }

    if (link.hasOwnProperty('linktype')) {
      linkObj.type = link.linktype;
    }

    if (link.hasOwnProperty('linkType')) {
      linkObj.type = link.linkType;
    }

    // remove renamed keys
    delete linkObj.href;
    delete linkObj.linkType;
    delete linkObj.linktype;

    if (isValidLinkObject(linkObj)) {
      return linkObj;
    } else {
      return null;
    }
  } else {
    return null;
  }
};
