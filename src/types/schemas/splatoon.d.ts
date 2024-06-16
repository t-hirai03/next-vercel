interface Boss {
  id: string;
  name: string;
}

interface Stage {
  id: number;
  name: string;
  image: string;
}

interface Weapon {
  name: string;
  image: string;
}

export interface salmonRunData {
  start_time: string;
  end_time: string;
  boss: Boss;
  stage: Stage;
  weapons: Weapon[];
  is_big_run: boolean;
}

export interface ApiResponse {
  results: salmonRunData[];
}