import { motion } from "framer-motion";
import figImg from "@/assets/fig.jpeg";

const advisors = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Biochemistry Expert",
    institution: "Harvard Medical School",
    image: figImg,
  },
  {
    name: "Prof. James Chen",
    role: "Neuroscience Researcher",
    institution: "MIT Department of Biology",
    image: figImg,
  },
  {
    name: "Dr. Maria Gonzalez",
    role: "Biotechnology Specialist",
    institution: "Stanford University",
    image: figImg,
  },
];

const AdvisorySection = () => {
  return (
    <section id="advisory" className="section-padding bg-muted/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold tracking-wider uppercase text-primary mb-3 block">
            Leadership
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6">
            Advisory Forum
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Our distinguished advisory board ensures the highest standards of research integrity and academic excellence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {advisors.map((advisor, i) => (
            <motion.div
              key={advisor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-xl p-8 text-center card-shadow border border-border hover:elevated-shadow transition-shadow"
            >
              <img
                src={advisor.image}
                alt={advisor.name}
                loading="lazy"
                className="w-24 h-24 rounded-full mx-auto mb-5 object-cover border-4 border-secondary"
              />
              <h3 className="text-lg font-bold text-foreground mb-1">{advisor.name}</h3>
              <p className="text-sm font-medium text-primary mb-1">{advisor.role}</p>
              <p className="text-xs text-muted-foreground">{advisor.institution}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvisorySection;
