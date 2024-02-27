import React from 'react';
import Container from "@/components/Container";
import {Avatar, AvatarFallback} from "@/components/ui/avatar";
import {renderSkills} from "@/app/components/MySkills";

const SeparatorBar = ({data}: { data: HeroSection }) => {

  return (
      <div className="sm:px-10 px-5 py-3 bg-background w-[100vw] relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw]">
        <Container>
          <div className="flex md:flex-row gap-3 flex-col justify-between">
            <div className="flex sm:flex-row flex-col gap-3 sm:gap-12">
            <div className="sm:flex grid grid-cols-4 gap-3">
              <div className="font-bold text-5xl">{data.experience_years}</div>
              <div className="uppercase w-32 border-l pl-3">years of experience</div>
            </div>
            <div className="sm:flex grid grid-cols-4 gap-3">
              <div className="font-bold text-5xl">{data.projects_completed_count}</div>
              <div className="uppercase w-60 border-l pl-3">projects completed worldwide</div>
            </div>
          </div>
          <div className="flex gap-3 mr-5">
            {renderSkills(data.skills, 6)}
          </div>
          </div>
        </Container>
      </div>
  )
      ;
};

export default SeparatorBar;
