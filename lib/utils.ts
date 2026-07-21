export function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export const siteConfig = {
  name: "Noviqa Management Services LLC",
  shortName: "Noviqa",
  tagline: "Improving Cash Flow. Preserving Relationships.",
  domain: "www.noviqa.ae",
  email: "info@noviqa.ae",
  phoneDisplay: "+971 54 994 6771",
  phoneHref: "+971549946771",
  whatsapp: "971549946771",
  address: {
    line1: "Meydan Free Zone",
    line2: "Dubai, United Arab Emirates",
  },
};
