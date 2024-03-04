import * as React from "react";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

import { Typography } from "@mui/material";

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: "100%",
  height: "100%",
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "center",
}));

const HomePaper = () => {
  return (
    <Stack padding={5} direction="column" spacing={2}>
      <DemoPaper elevation={6} square={false}>
        <Typography variant="h5">Message From Chief Engineer</Typography>
        <Typography Align="left" variant="subtitle1">
          <p>
            The Office of the Chief Engineer provides general and specialized
            repair and maintenance services of existing infra structure, ensure
            water, electricity and gas supply. We provide services related to
            telecom, lift, air condition, beautification of BUET campus etc.
            This office also works on engineering design, construction,
            management, development of all types of engineering projects.
          </p>
          <p>
            To facilitate proper service, we have several wings, such as civil
            wing, electrical wing, power generator wing, telecom, lift and AC
            wing, administrative wing. Total 325 employee including engineer,
            supervisor, mason, plumber, electrician, pump driver, generator
            operator, telephone operator, gardener, cleaner etc. are working in
            this office.
          </p>
          <p>
            To maintain the highest standards and best quality service is the
            core principle of our work. We remain dedicated to deliver
            engineering solutions that meet or exceed your expectations. Our
            team is continually reviewing and improving our processes to ensure
            the quality and reliability of our services.
          </p>
          <p>
            In response to the growing focus on sustainability and environmental
            responsibility, we are actively integrating sustainable practices
            into our engineering projects. We are excited to share our progress
            in this area and seek opportunities for even greater environmental
            impact.
          </p>
          <p>
            As the Chief Engineer of this office, I want to take a moment to
            provide you with an important update on our services and initiatives
            in this web site. We welcome your feedback, suggestions and
            questions at any time. Your insights are invaluable to us, and we
            believe that open dialogue and collaboration are the cornerstones of
            our successful partnership.
          </p>
          <p>
            Thank you for being a part of our journey, and please feel free to
            reach out to us at any time with your thoughts or concerns.
          </p>
          <p>
            Best regards,
            <br></br>
            Dr. Engr. A.K.M. Jahangir Alam <br></br>PEng. Chief Engineer{" "}
            <br></br>Office of the Chief Engineer <br></br>BUET
          </p>
        </Typography>
      </DemoPaper>
      <DemoPaper elevation={6} square={false}>
        <Typography variant="h5" style={{ color: "#932020" }}>
          Vision and Mission
        </Typography>
        <Typography Align="left">
          <p>Vision:</p>
          <p>
            To be a globally recognized leader in engineering services,
            delivering innovative solutions that transform the BUET for a
            sustainable and prosperous future. To be a globally recognized
            leader in engineering services, delivering innovative solutions that
            transform the BUET for a sustainable and prosperous future.
          </p>
          <p>Mission:</p>
          <p>
            Mission of Chief Engineer Office is to provide exceptional
            engineering services to our teachers, officers, employee as well as
            students driven by a commitment to excellence, sustainability, and
            technological advancement. We aim to:
          </p>
          <p>
            1. Deliver high-quality engineering solutions that meet and exceed
            our client's needs and expectations.
          </p>
          <p>
            2. Foster a culture of innovation, continuous learning, and
            collaboration among our talented team of engineers.
          </p>
          <p>
            {" "}
            3. Champion environmental responsibility and sustainability in all
            our projects, minimizing our ecological footprint.
          </p>
          <p>
            4. Contribute to the economic and social well-being of the
            communities in which we operate.{" "}
          </p>{" "}
          <p>
            5. Strive for operational excellence, safety, and ethical conduct in
            all aspects of our works.
          </p>
          <p>
            6. Invest in research and development to stay at the forefront of
            emerging technologies and engineering practices.
          </p>
          <p>
            {" "}
            7. Build enduring relationships with our teachers, officers,
            employee as well as students based on trust, integrity, and mutual
            success.
          </p>
          <p>
            {" "}
            8. Provide timely, reliable, and cost-effective maintenance
            solutions tailored to the specific needs of each person resided in
            BUET.
          </p>
          <p>
            {" "}
            9. Prioritize safety in all maintenance activities, ensuring the
            well-being of students, teachers, officers, employee and the
            environment.
          </p>
          <p>
            {" "}
            10. Maximize the lifespan and efficiency of our client's assets by
            applying best-in-class maintenance practices.
          </p>
          <p>
            {" "}
            11. Continuously invest in training and technology to stay at the
            forefront of maintenance innovation.
          </p>
          <p>
            {" "}
            12. Foster a culture of accountability, teamwork, and continuous
            improvement among our maintenance professionals.
          </p>
          <p>
            13. Contribute to sustainability by minimizing waste, energy
            consumption, and environmental impact in our maintenance operations.
          </p>
          <p>
            14. Maintain the highest ethical standards in all aspects of our
            service, acting as responsible corporate citizens.{" "}
          </p>
          <p>
            15. Strive for operational excellence and adaptability, meeting
            evolving maintenance challenges in a dynamic world.
          </p>
        </Typography>
      </DemoPaper>
    </Stack>
  );
};

export default HomePaper;
