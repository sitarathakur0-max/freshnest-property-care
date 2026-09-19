import React from 'react';

interface PropertyVisualProps {
  type: 'hero' | 'cleaning' | 'maintenance' | 'tenancy' | 'deepclean' | 'upkeep' | 'refresh' | 'london';
  className?: string;
  badgeText?: string;
  priority?: boolean;
}

export const PropertyVisual: React.FC<PropertyVisualProps> = ({
  type,
  className = '',
  badgeText,
}) => {
  // Neutral caption based on image honesty rule
  const defaultBadge =
    badgeText ||
    (type === 'hero'
      ? 'Property Care Inspiration'
      : type === 'london'
      ? 'London N1 Location'
      : type === 'maintenance' || type === 'upkeep'
      ? 'Property Maintenance'
      : 'Service Example');

  const renderVisualContent = () => {
    switch (type) {
      case 'hero':
        return (
          <svg
            viewBox="0 0 1200 700"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full object-cover"
            preserveAspectRatio="xMidYMid slice"
            role="img"
            aria-label="Property Care Inspiration: Impeccably maintained modern London interior with bright natural light and clean presentation"
          >
            <defs>
              <linearGradient id="hero-sky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#dce8e1" />
                <stop offset="100%" stopColor="#edf3ef" />
              </linearGradient>
              <linearGradient id="hero-wall" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f5f7f5" />
                <stop offset="100%" stopColor="#e9ece8" />
              </linearGradient>
              <linearGradient id="hero-floor" x1="0" y1="0" x2="1" y2="0.6">
                <stop offset="0%" stopColor="#c5a882" />
                <stop offset="50%" stopColor="#b4936a" />
                <stop offset="100%" stopColor="#9e7e57" />
              </linearGradient>
              <linearGradient id="hero-glass" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#c8dbd0" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient id="hero-wood" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#3d2b1f" />
                <stop offset="100%" stopColor="#251a13" />
              </linearGradient>
              <linearGradient id="hero-light-beam" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Back Wall */}
            <rect width="1200" height="700" fill="url(#hero-wall)" />

            {/* Architectural Sash Windows (London characteristic) */}
            <rect x="180" y="40" width="340" height="420" rx="4" fill="url(#hero-sky)" />
            <rect x="560" y="40" width="340" height="420" rx="4" fill="url(#hero-sky)" />

            {/* Tree foliage outside window (London garden terrace view) */}
            <circle cx="260" cy="380" r="90" fill="#4d6f5c" opacity="0.35" />
            <circle cx="340" cy="320" r="110" fill="#3b5948" opacity="0.4" />
            <circle cx="640" cy="350" r="120" fill="#436553" opacity="0.35" />
            <circle cx="780" cy="300" r="130" fill="#365242" opacity="0.4" />

            {/* Window Frames */}
            <rect x="175" y="35" width="350" height="430" rx="6" stroke="#2c3a32" strokeWidth="8" fill="none" />
            <line x1="350" y1="35" x2="350" y2="465" stroke="#2c3a32" strokeWidth="6" />
            <line x1="175" y1="180" x2="525" y2="180" stroke="#2c3a32" strokeWidth="5" />
            <line x1="175" y1="320" x2="525" y2="320" stroke="#2c3a32" strokeWidth="5" />

            <rect x="555" y="35" width="350" height="430" rx="6" stroke="#2c3a32" strokeWidth="8" fill="none" />
            <line x1="730" y1="35" x2="730" y2="465" stroke="#2c3a32" strokeWidth="6" />
            <line x1="555" y1="180" x2="905" y2="180" stroke="#2c3a32" strokeWidth="5" />
            <line x1="555" y1="320" x2="905" y2="320" stroke="#2c3a32" strokeWidth="5" />

            {/* Window reflection */}
            <polygon points="180,40 320,40 220,460 180,460" fill="url(#hero-glass)" />
            <polygon points="560,40 700,40 600,460 560,460" fill="url(#hero-glass)" />

            {/* Natural Sunlight Beam on Floor */}
            <polygon points="350,460 740,460 1020,700 240,700" fill="url(#hero-light-beam)" />

            {/* Parquet Hardwood Floor */}
            <polygon points="0,460 1200,460 1200,700 0,700" fill="url(#hero-floor)" />
            {/* Parquet Herringbone Lines */}
            <g stroke="#8d6e47" strokeWidth="1.5" opacity="0.65">
              <line x1="0" y1="520" x2="1200" y2="520" />
              <line x1="0" y1="580" x2="1200" y2="580" />
              <line x1="0" y1="640" x2="1200" y2="640" />
              {/* Slanted planks */}
              {[...Array(24)].map((_, i) => (
                <line key={`p1-${i}`} x1={i * 60} y1="460" x2={i * 60 + 50} y2="520" />
              ))}
              {[...Array(24)].map((_, i) => (
                <line key={`p2-${i}`} x1={i * 60 + 50} y1="520" x2={i * 60} y2="580" />
              ))}
              {[...Array(24)].map((_, i) => (
                <line key={`p3-${i}`} x1={i * 60} y1="580" x2={i * 60 + 50} y2="640" />
              ))}
              {[...Array(24)].map((_, i) => (
                <line key={`p4-${i}`} x1={i * 60 + 50} y1="640" x2={i * 60} y2="700" />
              ))}
            </g>

            {/* Skirting board */}
            <rect x="0" y="445" width="1200" height="15" fill="#f8faf7" stroke="#d5ded7" strokeWidth="1" />

            {/* Architectural Console Table */}
            <rect x="420" y="470" width="360" height="12" rx="3" fill="#1b3d2f" />
            <rect x="440" y="482" width="10" height="110" fill="#2d4a3b" />
            <rect x="750" y="482" width="10" height="110" fill="#2d4a3b" />
            <ellipse cx="600" cy="465" rx="35" ry="8" fill="#e2ebe5" />
            <path d="M575,465 C575,425 625,425 625,465 Z" fill="#e2ebe5" stroke="#bed0c6" strokeWidth="2" />
            {/* Minimalist branch */}
            <path d="M600,430 Q585,380 570,360 M600,410 Q620,385 635,370" stroke="#364b3f" strokeWidth="3" strokeLinecap="round" fill="none" />
            <circle cx="570" cy="360" r="5" fill="#52796f" />
            <circle cx="635" cy="370" r="5" fill="#52796f" />

            {/* Modern Armchair (Left) */}
            <g transform="translate(60, 390)">
              <rect x="25" y="100" width="6" height="60" fill="#222" transform="rotate(10 25 100)" />
              <rect x="135" y="100" width="6" height="60" fill="#222" transform="rotate(-10 135 100)" />
              <path d="M20,60 C20,30 50,15 85,15 C120,15 150,30 150,60 L145,105 C145,115 135,120 125,120 L45,120 C35,120 25,115 25,105 Z" fill="#324f41" />
              <path d="M35,65 C35,45 60,35 85,35 C110,35 135,45 135,65 L130,95 L40,95 Z" fill="#3f6151" />
              <rect x="40" y="90" width="90" height="25" rx="8" fill="#294034" />
            </g>

            {/* Potted Indoor Fiddle Leaf Fig (Right) */}
            <g transform="translate(1000, 340)">
              {/* Ceramic Pot */}
              <path d="M40,180 L110,180 L95,280 L55,280 Z" fill="#ded5ca" stroke="#c0b5a6" strokeWidth="2" />
              {/* Plant Leaves */}
              <ellipse cx="60" cy="140" rx="35" ry="50" fill="#244533" transform="rotate(-25 60 140)" />
              <ellipse cx="95" cy="110" rx="35" ry="55" fill="#2f5740" transform="rotate(20 95 110)" />
              <ellipse cx="45" cy="80" rx="30" ry="45" fill="#39664c" transform="rotate(-15 45 80)" />
              <ellipse cx="100" cy="50" rx="35" ry="50" fill="#274b37" transform="rotate(30 100 50)" />
              <ellipse cx="75" cy="20" rx="25" ry="40" fill="#447558" />
              <path d="M75,20 L75,180" stroke="#1d3829" strokeWidth="4" strokeLinecap="round" />
            </g>

            {/* Ambient Lighting / Polish Highlights */}
            <circle cx="350" cy="180" r="3" fill="#ffffff" />
            <circle cx="730" cy="180" r="3" fill="#ffffff" />
            <circle cx="430" cy="472" r="2" fill="#ffd166" opacity="0.8" />
          </svg>
        );

      case 'cleaning':
        return (
          <svg
            viewBox="0 0 800 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full object-cover"
            preserveAspectRatio="xMidYMid slice"
            role="img"
            aria-label="Service Example: Spotless modern kitchen island with polished marble countertop and spotless surfaces"
          >
            <defs>
              <linearGradient id="clean-bg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#edf2ee" />
                <stop offset="100%" stopColor="#e2e9e4" />
              </linearGradient>
              <linearGradient id="clean-marble" x1="0" y1="0" x2="1" y2="0.3">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="50%" stopColor="#f4f7f5" />
                <stop offset="100%" stopColor="#e8eee9" />
              </linearGradient>
              <linearGradient id="clean-cabinet" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#1e3a2d" />
                <stop offset="100%" stopColor="#15281f" />
              </linearGradient>
              <linearGradient id="clean-sheen" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Kitchen Back Wall with Subway Tiles */}
            <rect width="800" height="600" fill="url(#clean-bg)" />
            {/* Tile Grid */}
            <g stroke="#d5dfd7" strokeWidth="1" opacity="0.6">
              {[...Array(12)].map((_, i) => (
                <line key={`th-${i}`} x1="0" y1={i * 30} x2="800" y2={i * 30} />
              ))}
              {[...Array(16)].map((_, i) => (
                <line key={`tv1-${i}`} x1={i * 60} y1="0" x2={i * 60} y2="360" />
              ))}
            </g>

            {/* Upper Cabinet Edge */}
            <rect x="0" y="0" width="800" height="90" fill="#f8faf8" stroke="#d5dfd7" strokeWidth="2" />
            <rect x="60" y="90" width="680" height="6" fill="#1b3d2f" />

            {/* Back Countertop */}
            <rect x="0" y="270" width="800" height="40" fill="#ffffff" stroke="#cbd7ce" strokeWidth="1.5" />
            <rect x="0" y="310" width="800" height="150" fill="url(#clean-cabinet)" />

            {/* Kitchen Island (Foreground) */}
            <polygon points="100,320 700,320 780,440 20,440" fill="url(#clean-marble)" stroke="#c2d1c6" strokeWidth="2" />
            {/* Island Front Face */}
            <polygon points="20,440 780,440 760,590 40,590" fill="url(#clean-cabinet)" />

            {/* Marble Veins (Organic Lines) */}
            <path d="M180,340 Q280,380 420,360 T620,410" stroke="#cfded4" strokeWidth="2.5" fill="none" opacity="0.7" />
            <path d="M300,330 Q340,360 380,420" stroke="#d3e2d8" strokeWidth="1.5" fill="none" opacity="0.6" />

            {/* Polished Surface Sheen / Reflection */}
            <polygon points="150,330 350,330 250,430 80,430" fill="url(#clean-sheen)" opacity="0.5" />

            {/* Designer Glass Carafe with Fresh Lemon & Water */}
            <g transform="translate(560, 240)">
              <path d="M25,50 L45,50 L55,130 L15,130 Z" fill="#e8f3ec" stroke="#b4c9bd" strokeWidth="2" opacity="0.8" />
              <ellipse cx="35" cy="50" rx="10" ry="3" fill="#ffffff" />
              <circle cx="35" cy="100" r="14" fill="#f4d03f" opacity="0.9" />
              <circle cx="35" cy="80" r="10" fill="#f4d03f" opacity="0.8" />
              {/* Glass shine */}
              <line x1="22" y1="60" x2="20" y2="120" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
            </g>

            {/* Minimalist Bowl with Green Apples */}
            <g transform="translate(240, 310)">
              <ellipse cx="80" cy="55" rx="65" ry="18" fill="#182c22" opacity="0.25" />
              <path d="M20,50 C20,85 140,85 140,50 Z" fill="#ffffff" stroke="#c0d1c5" strokeWidth="2" />
              <circle cx="60" cy="45" r="18" fill="#609966" />
              <circle cx="95" cy="42" r="19" fill="#52796f" />
              <circle cx="78" cy="30" r="17" fill="#71a97a" />
            </g>

            {/* Sparkle Clean Icons (Subtle) */}
            <g transform="translate(480, 340)" stroke="#1e3a2d" strokeWidth="2" fill="none">
              <path d="M0,-8 L0,8 M-8,0 L8,0" />
            </g>
            <g transform="translate(210, 360)" stroke="#52796f" strokeWidth="1.5" fill="none">
              <path d="M0,-6 L0,6 M-6,0 L6,0" />
            </g>
          </svg>
        );

      case 'maintenance':
        return (
          <svg
            viewBox="0 0 800 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full object-cover"
            preserveAspectRatio="xMidYMid slice"
            role="img"
            aria-label="Property Maintenance: Architectural detail of Georgian panelled door, polished brass handle, and pristine woodwork"
          >
            <defs>
              <linearGradient id="maint-door" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#1e3a2e" />
                <stop offset="50%" stopColor="#254a3a" />
                <stop offset="100%" stopColor="#183327" />
              </linearGradient>
              <linearGradient id="maint-brass" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#fce49c" />
                <stop offset="40%" stopColor="#d4af37" />
                <stop offset="100%" stopColor="#997a15" />
              </linearGradient>
              <linearGradient id="maint-wall" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f5f7f4" />
                <stop offset="100%" stopColor="#e5ece7" />
              </linearGradient>
            </defs>

            {/* Surrounding Wall */}
            <rect width="800" height="600" fill="url(#maint-wall)" />

            {/* Crisp Door Architrave / Frame */}
            <rect x="140" y="0" width="520" height="600" fill="#ffffff" stroke="#cdd9d1" strokeWidth="3" />
            <rect x="165" y="0" width="470" height="600" fill="#f0f4f1" />

            {/* Georgian Panelled Door */}
            <rect x="180" y="0" width="440" height="600" fill="url(#maint-door)" />

            {/* Upper Panels */}
            <g>
              {/* Left Upper Panel */}
              <rect x="210" y="60" width="170" height="220" rx="3" fill="#183025" stroke="#325947" strokeWidth="4" />
              <rect x="222" y="72" width="146" height="196" rx="2" fill="#204032" />
              {/* Right Upper Panel */}
              <rect x="420" y="60" width="170" height="220" rx="3" fill="#183025" stroke="#325947" strokeWidth="4" />
              <rect x="432" y="72" width="146" height="196" rx="2" fill="#204032" />
            </g>

            {/* Lower Panels */}
            <g>
              {/* Left Lower Panel */}
              <rect x="210" y="340" width="170" height="240" rx="3" fill="#183025" stroke="#325947" strokeWidth="4" />
              <rect x="222" y="352" width="146" height="216" rx="2" fill="#204032" />
              {/* Right Lower Panel */}
              <rect x="420" y="340" width="170" height="240" rx="3" fill="#183025" stroke="#325947" strokeWidth="4" />
              <rect x="432" y="352" width="146" height="216" rx="2" fill="#204032" />
            </g>

            {/* Mid Rail Divider */}
            <rect x="180" y="300" width="440" height="25" fill="#1e3a2e" stroke="#12251d" strokeWidth="1" />

            {/* Polished Architectural Brass Lever Handle & Backplate */}
            <g transform="translate(560, 260)">
              {/* Backplate Shadow */}
              <rect x="3" y="3" width="32" height="130" rx="6" fill="#0c1712" opacity="0.6" />
              {/* Brass Backplate */}
              <rect x="0" y="0" width="32" height="130" rx="6" fill="url(#maint-brass)" stroke="#b89322" strokeWidth="1.5" />
              {/* Keyhole */}
              <circle cx="16" cy="85" r="4" fill="#2b1f05" />
              <polygon points="14,85 18,85 19,105 13,105" fill="#2b1f05" />
              {/* Lever Handle Boss */}
              <circle cx="16" cy="35" r="10" fill="url(#maint-brass)" stroke="#fff" strokeWidth="0.5" />
              {/* Lever Handle */}
              <rect x="-65" y="28" width="75" height="14" rx="7" fill="url(#maint-brass)" stroke="#ffeaa7" strokeWidth="1" />
              <circle cx="-65" cy="35" r="7" fill="url(#maint-brass)" />
              {/* Polish Gleam */}
              <line x1="-50" y1="32" x2="-10" y2="32" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
            </g>

            {/* Precision Measurement / Inspection Rule (Subtle maintenance marker) */}
            <g transform="translate(80, 200)" opacity="0.85">
              <rect x="0" y="0" width="24" height="200" rx="2" fill="#e8eee9" stroke="#b2c4b8" strokeWidth="1" />
              {[...Array(20)].map((_, i) => (
                <line key={`rule-${i}`} x1="0" y1={i * 10} x2={i % 5 === 0 ? 16 : 8} y2={i * 10} stroke="#385444" strokeWidth="1" />
              ))}
            </g>
          </svg>
        );

      case 'tenancy':
        return (
          <svg
            viewBox="0 0 800 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full object-cover"
            preserveAspectRatio="xMidYMid slice"
            role="img"
            aria-label="Property Care Inspiration: Handover-ready clean flat interior with pristine polished wood floors"
          >
            <defs>
              <linearGradient id="tenancy-sky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#dce8e1" />
                <stop offset="100%" stopColor="#eaf1ec" />
              </linearGradient>
              <linearGradient id="tenancy-floor" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#b4936a" />
                <stop offset="100%" stopColor="#967751" />
              </linearGradient>
            </defs>

            {/* Back and side walls */}
            <rect width="800" height="600" fill="#f8faf8" />
            <polygon points="0,0 180,100 180,450 0,600" fill="#edf2ee" />
            <polygon points="800,0 620,100 620,450 800,600" fill="#e6ede8" />

            {/* Large Picture Window (London skyline silhouette) */}
            <rect x="220" y="60" width="360" height="340" rx="4" fill="url(#tenancy-sky)" stroke="#1e3a2e" strokeWidth="6" />
            <line x1="400" y1="60" x2="400" y2="400" stroke="#1e3a2e" strokeWidth="4" />
            <line x1="220" y1="230" x2="580" y2="230" stroke="#1e3a2e" strokeWidth="4" />

            {/* London Rooftops Silhouette */}
            <polygon points="230,400 270,360 300,370 330,340 370,360 410,330 450,370 510,350 570,400" fill="#8ca89a" opacity="0.4" />

            {/* Polished Floorboards */}
            <polygon points="180,450 620,450 800,600 0,600" fill="url(#tenancy-floor)" />
            {/* Floorboard Perspective Lines */}
            <g stroke="#7e6240" strokeWidth="1.5">
              <line x1="400" y1="450" x2="400" y2="600" />
              <line x1="330" y1="450" x2="200" y2="600" />
              <line x1="260" y1="450" x2="0" y2="580" />
              <line x1="470" y1="450" x2="600" y2="600" />
              <line x1="540" y1="450" x2="800" y2="580" />
            </g>

            {/* Polished Floor Light Reflection */}
            <polygon points="280,450 520,450 600,600 200,600" fill="#ffffff" opacity="0.2" />

            {/* Handover Key Tag Detail (Symbol of end of tenancy readiness) */}
            <g transform="translate(360, 480)">
              <ellipse cx="40" cy="40" rx="35" ry="12" fill="#000000" opacity="0.2" />
              {/* Ring */}
              <circle cx="25" cy="30" r="14" stroke="#cda434" strokeWidth="3" fill="none" />
              {/* Tag */}
              <rect x="35" y="15" width="45" height="30" rx="4" fill="#1b3d2f" stroke="#2a5743" strokeWidth="1.5" />
              <rect x="42" y="22" width="30" height="4" rx="2" fill="#ffffff" />
              <rect x="42" y="30" width="20" height="4" rx="2" fill="#a4c2b3" />
            </g>
          </svg>
        );

      case 'deepclean':
        return (
          <svg
            viewBox="0 0 800 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full object-cover"
            preserveAspectRatio="xMidYMid slice"
            role="img"
            aria-label="Service Example: Immaculate bathroom interior with clean stone tiles and polished chrome fittings"
          >
            <defs>
              <linearGradient id="dc-wall" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f3f6f4" />
                <stop offset="100%" stopColor="#e4ece6" />
              </linearGradient>
              <linearGradient id="dc-chrome" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="50%" stopColor="#d1dad4" />
                <stop offset="100%" stopColor="#8d9d93" />
              </linearGradient>
            </defs>

            {/* Stone Wall Background */}
            <rect width="800" height="600" fill="url(#dc-wall)" />
            {/* Tile grid */}
            <g stroke="#d0ded4" strokeWidth="1">
              {[...Array(10)].map((_, i) => (
                <line key={`dch-${i}`} x1="0" y1={i * 60} x2="800" y2={i * 60} />
              ))}
              {[...Array(8)].map((_, i) => (
                <line key={`dcv-${i}`} x1={i * 110} y1="0" x2={i * 110} y2="600" />
              ))}
            </g>

            {/* Frameless Glass Screen */}
            <polygon points="120,40 120,600 380,600 380,40" fill="#d8ebe0" opacity="0.3" stroke="#9bbcb0" strokeWidth="2" />
            <line x1="160" y1="40" x2="130" y2="600" stroke="#ffffff" strokeWidth="4" opacity="0.6" />

            {/* Chrome Rainfall Shower Head */}
            <rect x="220" y="40" width="10" height="120" fill="url(#dc-chrome)" />
            <path d="M220,160 Q220,200 280,200 L320,200" stroke="url(#dc-chrome)" strokeWidth="12" fill="none" strokeLinecap="round" />
            <rect x="300" y="195" width="80" height="10" rx="3" fill="url(#dc-chrome)" />
            <ellipse cx="340" cy="205" rx="40" ry="10" fill="url(#dc-chrome)" />

            {/* Shower Control Valves */}
            <g transform="translate(240, 320)">
              <circle cx="20" cy="20" r="28" fill="url(#dc-chrome)" stroke="#7e9185" strokeWidth="1" />
              <rect x="16" y="-5" width="8" height="50" rx="3" fill="url(#dc-chrome)" />
              <circle cx="20" cy="20" r="4" fill="#1b3d2f" />
            </g>

            {/* Floating Vanity Sink (Right side) */}
            <rect x="460" y="320" width="300" height="140" rx="6" fill="#193327" />
            <ellipse cx="610" cy="320" rx="80" ry="15" fill="#ffffff" stroke="#cbdad0" strokeWidth="2" />
            {/* Vanity Chrome Tap */}
            <path d="M610,240 L610,280 Q610,310 610,320" stroke="url(#dc-chrome)" strokeWidth="8" strokeLinecap="round" />
            <path d="M610,240 Q610,220 590,220 L580,220" stroke="url(#dc-chrome)" strokeWidth="8" strokeLinecap="round" />

            {/* Sparkle detailing */}
            <g transform="translate(610, 230)" stroke="#1b3d2f" strokeWidth="2" fill="none">
              <path d="M0,-6 L0,6 M-6,0 L6,0" />
            </g>
          </svg>
        );

      case 'upkeep':
        return (
          <svg
            viewBox="0 0 800 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full object-cover"
            preserveAspectRatio="xMidYMid slice"
            role="img"
            aria-label="Property Maintenance: Orderly, well-maintained residential hallway with tidy entrance presentation"
          >
            <defs>
              <linearGradient id="up-wall" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f5f7f5" />
                <stop offset="100%" stopColor="#e7ece7" />
              </linearGradient>
            </defs>

            {/* Hallway walls */}
            <rect width="800" height="600" fill="url(#up-wall)" />
            {/* Ceiling cornice */}
            <rect x="0" y="0" width="800" height="20" fill="#ffffff" stroke="#d5ded7" strokeWidth="1" />

            {/* Perspective hallway flooring */}
            <polygon points="260,320 540,320 740,600 60,600" fill="#c3a886" />
            <g stroke="#9c7e5a" strokeWidth="2">
              <line x1="360" y1="320" x2="260" y2="600" />
              <line x1="440" y1="320" x2="540" y2="600" />
              <line x1="310" y1="400" x2="490" y2="400" />
              <line x1="200" y1="500" x2="600" y2="500" />
            </g>

            {/* Back Door at end of hall */}
            <rect x="350" y="160" width="100" height="160" fill="#1b3d2f" rx="3" stroke="#ffffff" strokeWidth="4" />
            <circle cx="430" cy="245" r="4" fill="#f4d03f" />

            {/* Hallway Mirror with Gilded Frame */}
            <g transform="translate(100, 140)">
              <rect x="0" y="0" width="90" height="150" rx="45" fill="#e5eee8" stroke="#d4af37" strokeWidth="5" />
              <line x1="15" y1="30" x2="65" y2="130" stroke="#ffffff" strokeWidth="3" opacity="0.7" />
            </g>

            {/* Hallway Console & Care Elements */}
            <rect x="80" y="300" width="130" height="10" rx="2" fill="#2d4236" />
            <line x1="95" y1="310" x2="95" y2="440" stroke="#2d4236" strokeWidth="4" />
            <line x1="195" y1="310" x2="195" y2="440" stroke="#2d4236" strokeWidth="4" />

            {/* Pendant Light Fixture */}
            <line x1="400" y1="0" x2="400" y2="90" stroke="#2d4236" strokeWidth="2" />
            <circle cx="400" cy="110" r="22" fill="#ffffff" stroke="#c0cec5" strokeWidth="2" />
            <circle cx="400" cy="110" r="35" fill="#fff8e7" opacity="0.35" />
          </svg>
        );

      case 'refresh':
        return (
          <svg
            viewBox="0 0 800 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full object-cover"
            preserveAspectRatio="xMidYMid slice"
            role="img"
            aria-label="Service Example: Refreshed, bright, and neatly presented living space"
          >
            <rect width="800" height="600" fill="#f5f7f5" />
            {/* Picture Frame */}
            <rect x="280" y="60" width="240" height="160" rx="3" fill="#ffffff" stroke="#36493f" strokeWidth="6" />
            <rect x="300" y="80" width="200" height="120" fill="#e5efe9" />
            <circle cx="400" cy="140" r="30" fill="#52796f" opacity="0.4" />

            {/* Sofa */}
            <g transform="translate(180, 240)">
              <rect x="0" y="80" width="440" height="160" rx="16" fill="#2d4a3b" />
              <rect x="30" y="120" width="180" height="90" rx="10" fill="#3b5e4c" />
              <rect x="230" y="120" width="180" height="90" rx="10" fill="#3b5e4c" />
              <circle cx="100" cy="100" r="20" fill="#d4af37" opacity="0.8" />
              <circle cx="340" cy="100" r="20" fill="#e8eee9" opacity="0.9" />
            </g>

            {/* Coffee table */}
            <ellipse cx="400" cy="490" rx="140" ry="40" fill="#1b2e24" />
            <ellipse cx="400" cy="485" rx="136" ry="38" fill="#dfd3c3" />
          </svg>
        );

      case 'london':
      default:
        return (
          <svg
            viewBox="0 0 800 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full object-cover"
            preserveAspectRatio="xMidYMid slice"
            role="img"
            aria-label="London N1 Location: Maintained London townhouse facade with classic brickwork and clean railings"
          >
            <defs>
              <linearGradient id="lon-sky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#dce8e1" />
                <stop offset="100%" stopColor="#eef4f0" />
              </linearGradient>
              <linearGradient id="lon-brick" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#8d5b4c" />
                <stop offset="50%" stopColor="#a06857" />
                <stop offset="100%" stopColor="#845345" />
              </linearGradient>
            </defs>

            {/* London Overcast Soft Sky */}
            <rect width="800" height="600" fill="url(#lon-sky)" />

            {/* Georgian Townhouse Facade */}
            <rect x="100" y="100" width="600" height="500" fill="url(#lon-brick)" />
            {/* Brick Texture Lines */}
            <g stroke="#6e4336" strokeWidth="1" opacity="0.5">
              {[...Array(25)].map((_, i) => (
                <line key={`bk-${i}`} x1="100" y1={100 + i * 20} x2="700" y2={100 + i * 20} />
              ))}
            </g>

            {/* Upper Sash Windows */}
            <g>
              <rect x="170" y="140" width="100" height="140" rx="3" fill="#ffffff" stroke="#36493f" strokeWidth="4" />
              <line x1="220" y1="140" x2="220" y2="280" stroke="#36493f" strokeWidth="3" />
              <line x1="170" y1="200" x2="270" y2="200" stroke="#36493f" strokeWidth="3" />

              <rect x="350" y="140" width="100" height="140" rx="3" fill="#ffffff" stroke="#36493f" strokeWidth="4" />
              <line x1="400" y1="140" x2="400" y2="280" stroke="#36493f" strokeWidth="3" />
              <line x1="350" y1="200" x2="450" y2="200" stroke="#36493f" strokeWidth="3" />

              <rect x="530" y="140" width="100" height="140" rx="3" fill="#ffffff" stroke="#36493f" strokeWidth="4" />
              <line x1="580" y1="140" x2="580" y2="280" stroke="#36493f" strokeWidth="3" />
              <line x1="530" y1="200" x2="630" y2="200" stroke="#36493f" strokeWidth="3" />
            </g>

            {/* Townhouse Entrance with Classical Portico Pillars */}
            <g transform="translate(320, 320)">
              {/* Portico Pediment & Header */}
              <polygon points="0,30 80,0 160,30" fill="#f4f6f4" stroke="#c5d0c8" strokeWidth="2" />
              <rect x="5" y="30" width="150" height="16" fill="#ffffff" stroke="#c5d0c8" strokeWidth="1.5" />
              {/* Columns */}
              <rect x="15" y="46" width="18" height="234" fill="#f8faf8" stroke="#c5d0c8" strokeWidth="1.5" />
              <rect x="127" y="46" width="18" height="234" fill="#f8faf8" stroke="#c5d0c8" strokeWidth="1.5" />

              {/* Front Door */}
              <rect x="35" y="46" width="90" height="190" fill="#152f23" stroke="#254a3a" strokeWidth="2" />
              {/* Fanlight window above door */}
              <path d="M35,46 C35,15 125,15 125,46 Z" fill="#dce9e1" stroke="#254a3a" strokeWidth="2" />
              {/* Brass door knocker and handle */}
              <circle cx="80" cy="110" r="6" fill="#f1c40f" />
              <circle cx="45" cy="140" r="4" fill="#f1c40f" />
              {/* Door number plaque */}
              <rect x="70" y="85" width="20" height="12" rx="2" fill="#ffffff" />
            </g>

            {/* Stone Steps */}
            <polygon points="300,520 500,520 540,600 260,600" fill="#e1e8e3" stroke="#becbc2" strokeWidth="1.5" />
            <line x1="290" y1="545" x2="510" y2="545" stroke="#becbc2" strokeWidth="2" />
            <line x1="275" y1="570" x2="525" y2="570" stroke="#becbc2" strokeWidth="2" />

            {/* Wrought Iron Railings (London Architectural Standard) */}
            <g stroke="#1a2620" strokeWidth="3">
              <line x1="80" y1="460" x2="310" y2="460" />
              <line x1="490" y1="460" x2="720" y2="460" />
              {[...Array(14)].map((_, i) => (
                <line key={`rl-${i}`} x1={90 + i * 15} y1="420" x2={90 + i * 15} y2="550" />
              ))}
              {[...Array(14)].map((_, i) => (
                <line key={`rr-${i}`} x1={510 + i * 15} y1="420" x2={510 + i * 15} y2="550" />
              ))}
            </g>
          </svg>
        );
    }
  };

  return (
    <div className={`relative overflow-hidden bg-[#eef3f0] ${className}`}>
      {renderVisualContent()}
      {badgeText !== '' && (
        <div className="absolute bottom-3 left-3 z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold tracking-wide text-[#193527] bg-[#fbfcf9]/95 backdrop-blur-sm rounded-md border border-[#d6e2db] shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3d6952]"></span>
            {defaultBadge}
          </span>
        </div>
      )}
    </div>
  );
};
