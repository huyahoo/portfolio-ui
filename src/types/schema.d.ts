type NavItem = {
  id: number;
  title: string;
  href: string;
  icon: string;
};

type Skill = {
  id: number;
  show: boolean;
  icon: string;
  title: string;
  subtitle: string;
  skillsList: SkillData[];
};

type SkillData = {
  id: number;
  name: string;
  level: number;
};

type QualificationTab = {
  id: number;
  active: boolean;
  name: string;
  icon: string;
  data: QualificationData[];
};

type QualificationData = {
  id: number;
  title: string;
  subtitle: string;
  location: string;
  startDate: string;
  endDate: string;
};

export { NavItem, Skill, QualificationTab };
