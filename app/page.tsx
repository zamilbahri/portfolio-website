/* eslint-disable @typescript-eslint/no-unused-vars */

import About from "@/components/about";
import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import WorkInProgress from "@/components/wip";

export default function Home() {
  return (
		<main className="flex flex-col items-center px-4">
			<Intro />
			<SectionDivider />
			<About />
			<WorkInProgress />
		</main>
  );
}
