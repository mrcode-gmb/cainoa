import { motion } from "framer-motion"
import gsuLogo from "../assets/gsu alumni.png"
import aqtrisLogo from "../assets/aqtris-logo-solid-1color.png"
import benevolenceLogo from "../assets/Benovelance.jpeg"
import fmbnLogo from "../assets/fmbn.jpeg"

type PartnerWithLogo = { name: string; logo: string; description: string }
type PartnerWithInitials = { name: string; initials: string; description: string }
type Partner = PartnerWithLogo | PartnerWithInitials

const partners: Partner[] = [
  {
    name: "Sukra LTD",
    initials: "SL",
    description: "Technology & Investment",
  },
  {
    name: "Aqtris Technologies",
    logo: aqtrisLogo,
    description: "Digital Innovation",
  },
  {
    name: "GSU Alumni Payment Collector",
    logo: gsuLogo,
    description: "Digital Payment Solutions",
  },
  {
    name: "Benevolence Cooperative Society",
    logo: benevolenceLogo,
    description: "Financial Inclusion",
  },
  {
    name: "FMBN Equishare Cooperative Society",
    logo: fmbnLogo,
    description: "Housing Finance",
  },
]

function hasLogo(partner: Partner): partner is PartnerWithLogo {
  return "logo" in partner
}

export default function PartnersSection() {
  return (
    <section id="partners" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-primary">
            Powering Innovation{" "}
            <span className="text-accent-mint">Alongside</span>
          </h2>
          <p className="mt-4 text-lg text-muted-text leading-relaxed">
            Trusted by organizations building the future of Africa&apos;s digital
            economy.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative flex flex-col items-center justify-center p-6 rounded-3xl border border-border bg-card-bg hover:border-primary/40 hover:shadow-xl transition-all duration-500"
            >
              {hasLogo(partner) ? (
                <div className="w-full h-24 flex items-center justify-center mb-4 px-4 bg-white/50 dark:bg-slate-800/60 rounded-2xl border border-border/40">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain dark:brightness-125"
                  />
                </div>
              ) : (
                <div className="w-16 h-16 rounded-2xl bg-secondary-bg border border-border flex items-center justify-center mb-4 transition-all duration-500">
                  <span className="font-heading text-xl font-bold text-primary">
                    {partner.initials}
                  </span>
                </div>
              )}
              <h3 className="font-heading text-sm font-semibold text-primary text-center">
                {partner.name}
              </h3>
              <p className="text-xs text-muted-text mt-1 text-center">
                {partner.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
