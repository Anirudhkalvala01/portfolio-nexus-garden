import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const skills = [
    "React", "TypeScript", "Node.js", "Python",
    "AWS", "Docker", "GraphQL", "PostgreSQL"
  ];

  const experiences = [
    {
      title: "Senior Developer",
      company: "Tech Corp",
      period: "2020 - Present",
      description: "Led development of multiple web applications using React and Node.js."
    },
    {
      title: "Full Stack Developer",
      company: "StartUp Inc",
      period: "2018 - 2020",
      description: "Developed and maintained various web applications."
    }
  ];

  return (
    <Layout>
      <div className="space-y-8">
        <section>
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-muted-foreground">
            I'm a passionate developer with over 5 years of experience in web development.
            I love creating elegant solutions to complex problems.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="bg-secondary p-4 rounded-lg text-center font-medium"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Experience</h2>
          <div className="grid gap-6">
            {experiences.map((exp) => (
              <Card key={exp.title}>
                <CardHeader>
                  <CardTitle>{exp.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">
                    {exp.company} | {exp.period}
                  </p>
                  <p>{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;