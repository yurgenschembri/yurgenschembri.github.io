import MsCertAssociateIcon from "@/components/icons/ms-cert-associate-icon";
import MsCertExpertIcon from "@/components/icons/ms-cert-expert-icon";
import clsx from "clsx";
// import { ChevronDown } from "lucide-react";

export default function Education() {
  const courses = [
    {
      title: "Microsoft Certified: Azure Solutions Architect Expert",
      emblem: <MsCertExpertIcon />,
    },
    {
      title: "Microsoft Certified: Azure Administrator Associate",
      emblem: <MsCertAssociateIcon />,
    },
    {
      title: "Microsoft Certified: Azure Developer Associate",
      emblem: <MsCertAssociateIcon />,
    },
    {
      title: "M. Sc. in Artificial Intelligence",
      emblem: <MsCertAssociateIcon />,
    },
    {
      title: "B. Sc. in I.T. (Artificial Intelligence)",
      emblem: <MsCertAssociateIcon />,
    },
  ];
  return (
    <div
      id="education"
      className={clsx(
        "bg-wheat-600 w-screen h-screen flex flex-col items-center justify-center",
        "snap-start"
      )}
    >
      <ul className="flex flex-col gap-2 m-2">
        {courses.map((course) => (
          <li
            key={course.title}
            className="flex flex-row justify-between gap-2 p-2 rounded-sm bg-golden_brown text-wheat-800"
          >
            <div className="flex flex-row items-center gap-2">
              {course.emblem} {course.title}
            </div>{" "}
            {/* <div>
              <ChevronDown className="text-wheat-400" />
            </div> */}
          </li>
        ))}
      </ul>
    </div>
  );
}
