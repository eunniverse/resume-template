'use client';
import {Introduce} from "@/components/introduce";
import {WorkExperience} from "@/components/workExperience";
import * as React from "react";
import {Header} from "@/components/header";
import {HeadLoading} from "@/components/headLoading";
import TechStack from "@/components/techStack";
import OtherExperience from "@/components/otherExperience";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-white dark:bg-black text-black dark:text-white">
            <HeadLoading/>
            <Header/>
            <Introduce/>
            <div id="modal-root"></div>
            <TechStack/>
            <WorkExperience/>
            <OtherExperience/>
        </main>
  );
}
