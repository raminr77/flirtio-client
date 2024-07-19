import { useEffect, useMemo, useState } from 'react';
import { loadSlim } from '@tsparticles/slim';
import type { ISourceOptions } from '@tsparticles/engine';
import Particles, { initParticlesEngine } from '@tsparticles/react';

import { PARTICLES_CONFIG } from './constants/particles';

export function HomeParticles() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options: ISourceOptions = useMemo(() => PARTICLES_CONFIG, []);

  if (init) {
    return <Particles id='particles' options={options} />;
  }
  return <div />;
}
