import { useState, useEffect, useRef } from "react";
import { createClient } from "@supabase/supabase-js";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";

// ─── MOBILE HOOK ─────────────────────────────────────────────────────────────
function useW(){
  const [w,setW]=useState(window.innerWidth);
  useEffect(()=>{
    const h=()=>setW(window.innerWidth);
    window.addEventListener("resize",h);
    return()=>window.removeEventListener("resize",h);
  },[]);
  return w;
}

// ─── SUPABASE CLIENT ──────────────────────────────────────────────────────────
const SUPA_URL = "https://licexdddqvuxovihyhvg.supabase.co";
const SUPA_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxpY2V4ZGRkcXZ1eG92aWh5aHZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ0NzczNjksImV4cCI6MjA5MDA1MzM2OX0.5PhmGrfmx5oUYOWZimpOAY-xyTBSO-FBGT9soguZ1UI";
const supabase = createClient(SUPA_URL, SUPA_KEY);

// ─── SVG PLATFORM LOGOS ───────────────────────────────────────────────────────
const YT  = ({s=28}) => <svg width={s} height={s} viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#FF0000"/><path d="M21.8 7.2s-.2-1.4-.8-2c-.8-.8-1.6-.8-2-.9C16.6 4 12 4 12 4s-4.6 0-7 .3c-.4.1-1.2.1-2 .9-.6.6-.8 2-.8 2S2 8.8 2 10.4v1.5c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.8.8 1.8.8 2.2.8C6.6 18 12 18 12 18s4.6 0 7-.3c.4-.1 1.2-.1 2-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.5C22 8.8 21.8 7.2 21.8 7.2zM9.7 14.5V9l5.4 2.8-5.4 2.7z" fill="white"/></svg>;
const TT  = ({s=28}) => <svg width={s} height={s} viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#111"/><path d="M16 3h-3v11.5a2.5 2.5 0 11-2.5-2.5c.22 0 .44.03.65.08V9.04A5.5 5.5 0 108 14.5V3H5v11.5A5.5 5.5 0 1016 8.55V3z" fill="white"/></svg>;
const PA  = ({s=28}) => <svg width={s} height={s} viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#FF424D"/><circle cx="14.5" cy="10.5" r="4.5" fill="white"/><rect x="5" y="5" width="3" height="14" rx="1" fill="white"/></svg>;
const SP  = ({s=28}) => <svg width={s} height={s} viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#F5C518"/><path d="M12 3l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17.4l-6.2 4.3 2.4-7.4L2 10.4h7.6z" fill="#1a1000"/></svg>;
const ME  = ({s=28}) => <svg width={s} height={s} viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#00C896"/><path d="M16 7H8L6 11h2v7h8v-7h2L16 7zm-4-2a2 2 0 012 2H10a2 2 0 012-2z" fill="white"/></svg>;
const AF  = ({s=28}) => <svg width={s} height={s} viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#A259FF"/><path d="M10 13a5 5 0 007.5.6l1.4-1.4a5 5 0 00-7-7l-1 1" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"/><path d="M14 11a5 5 0 00-7.5-.6L5.1 11.8a5 5 0 007 7l1-1" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"/></svg>;
const SS  = ({s=28}) => <svg width={s} height={s} viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#FF6719"/><path d="M6 7h12v2H6zM6 11h12v2H6zM6 15l6 4 6-4V15H6z" fill="white"/></svg>;
const TW  = ({s=28}) => <svg width={s} height={s} viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#9146FF"/><path d="M5 3L3 7v13h5v3h3l3-3h4l4-4V3H5zm15 12l-3 3h-4l-3 3v-3H6V5h14v10zm-3-7v6h-2V8h2zm-5 0v6h-2V8h2z" fill="white"/></svg>;
const OF  = ({s=28}) => <svg width={s} height={s} viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#00AFF0"/><circle cx="12" cy="12" r="5" stroke="white" strokeWidth="2.5" fill="none"/><circle cx="12" cy="12" r="2" fill="white"/></svg>;
const SPO = ({s=28}) => <svg width={s} height={s} viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#1DB954"/><circle cx="12" cy="12" r="7" fill="none" stroke="white" strokeWidth="0"/><path d="M7 15.5c2.5-1 5.5-1.2 8 .2M6.5 12.5c3-1.2 6.5-1.4 9.5.3M7.5 9.5c2.5-.8 5.5-.9 8 .3" stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none"/></svg>;
const KF  = ({s=28}) => <svg width={s} height={s} viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#FF5E5B"/><path d="M5 8h14v2H5zM5 12h9v2H5zM16 10c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zm0 2a1 1 0 100 2 1 1 0 000-2z" fill="white"/></svg>;
const SH  = ({s=28}) => <svg width={s} height={s} viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#96BF48"/><path d="M15.5 5c-.1-.1-.3-.1-.4 0l-.8.3C14 4.5 13.3 4 12.5 4c-.5 0-.9.2-1.2.5-.7 0-1.3.5-1.6 1.3L8.5 6.2 7 18h10l-1.5-13zm-3 .5c.3 0 .6.1.8.3l-2.1.7c.2-.6.7-1 1.3-1zm3.5 3.5H8l.4-2.7 6.8-2.3.8 5z" fill="white"/></svg>;
const OT  = ({s=28}) => <svg width={s} height={s} viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#555"/><circle cx="7.5" cy="12" r="1.5" fill="white"/><circle cx="12" cy="12" r="1.5" fill="white"/><circle cx="16.5" cy="12" r="1.5" fill="white"/></svg>;

const LOGO_MAP = {
  YouTube:YT, TikTok:TT, Patreon:PA, Sponsorship:SP, Merch:ME,
  Affiliate:AF, Substack:SS, Twitch:TW, OnlyFans:OF,
  Spotify:SPO, "Ko-fi":KF, Shopify:SH, Other:OT,
};
function PlatLogo({name, size=28}){ const L=LOGO_MAP[name]||OT; return <L s={size}/>; }

// ─── PLATFORMS ────────────────────────────────────────────────────────────────
const PLATFORMS = [
  { name:"YouTube",     color:"#FF4444", glow:"rgba(255,68,68,0.25)" },
  { name:"TikTok",      color:"#00CCCC", glow:"rgba(0,204,204,0.25)" },
  { name:"Patreon",     color:"#FF6B6B", glow:"rgba(255,107,107,0.25)" },
  { name:"Sponsorship", color:"#E8B800", glow:"rgba(232,184,0,0.25)" },
  { name:"Merch",       color:"#00C896", glow:"rgba(0,200,150,0.25)" },
  { name:"Affiliate",   color:"#A259FF", glow:"rgba(162,89,255,0.25)" },
  { name:"Substack",    color:"#FF6719", glow:"rgba(255,103,25,0.25)" },
  { name:"Twitch",      color:"#9146FF", glow:"rgba(145,70,255,0.25)" },
  { name:"OnlyFans",    color:"#00AFF0", glow:"rgba(0,175,240,0.25)" },
  { name:"Spotify",     color:"#1DB954", glow:"rgba(29,185,84,0.25)" },
  { name:"Ko-fi",       color:"#FF5E5B", glow:"rgba(255,94,91,0.25)" },
  { name:"Shopify",     color:"#7AB435", glow:"rgba(122,180,53,0.25)" },
  { name:"Other",       color:"#888888", glow:"rgba(136,136,136,0.15)" },
];

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

// State income tax rates — 2025 top marginal rates (Tax Foundation, IRS, TurboTax)
// Note: For flat-rate states the top rate = flat rate. For progressive states,
// we apply the top marginal rate to income above the standard deduction as an
// approximation (shown in UI as "top marginal" with disclaimer). This is
// conservative — actual effective rate will be lower for most incomes.
const STATE_TAXES = {
  "Alabama":5.0,       // top marginal (progressive)
  "Alaska":0,          // no state income tax
  "Arizona":2.5,       // flat rate
  "Arkansas":4.4,      // top marginal (reduced 2024)
  "California":13.3,   // 12.3% + 1% millionaire surcharge; 13.3% top marginal
  "Colorado":4.4,      // flat rate
  "Connecticut":6.99,  // top marginal
  "Delaware":6.6,      // top marginal
  "Florida":0,         // no state income tax
  "Georgia":5.49,      // flat rate (phasing down)
  "Hawaii":11.0,       // top marginal (one of highest in US)
  "Idaho":5.8,         // top marginal
  "Illinois":4.95,     // flat rate
  "Indiana":3.15,      // flat rate (updated 2024)
  "Iowa":5.7,          // top marginal (phasing down)
  "Kansas":5.7,        // top marginal
  "Kentucky":4.0,      // flat rate
  "Louisiana":4.25,    // top marginal
  "Maine":7.15,        // top marginal
  "Maryland":5.75,     // top marginal (state only, counties add local)
  "Massachusetts":9.0, // 5% flat + 4% surtax on income over $1M; use 9% as top
  "Michigan":4.25,     // flat rate
  "Minnesota":9.85,    // top marginal
  "Mississippi":4.7,   // top marginal (phasing down)
  "Missouri":4.95,     // top marginal (reduced 2024)
  "Montana":5.9,       // top marginal (reduced 2024)
  "Nebraska":5.2,      // top marginal (phasing down)
  "Nevada":0,          // no state income tax
  "New Hampshire":0,   // no income tax on wages (repealed 2025)
  "New Jersey":10.75,  // top marginal (over $1M)
  "New Mexico":5.9,    // top marginal
  "New York":10.9,     // top marginal (over $25M adds more)
  "North Carolina":4.5,// flat rate
  "North Dakota":2.5,  // top marginal
  "Ohio":3.5,          // top marginal (reduced; under $26k exempt)
  "Oklahoma":4.75,     // top marginal
  "Oregon":9.9,        // top marginal
  "Pennsylvania":3.07, // flat rate
  "Rhode Island":5.99, // top marginal
  "South Carolina":6.2,// top marginal (phasing down)
  "South Dakota":0,    // no state income tax
  "Tennessee":0,       // no state income tax on wages
  "Texas":0,           // no state income tax
  "Utah":4.55,         // flat rate
  "Vermont":6.75,      // top marginal
  "Virginia":5.75,     // top marginal
  "Washington":0,      // no income tax on wages
  "West Virginia":5.12,// top marginal (phasing down)
  "Wisconsin":7.65,    // top marginal
  "Wyoming":0,         // no state income tax
  "District of Columbia":10.75, // top marginal (over $1M)
};

// 2025 Federal Tax Brackets — IRS Rev. Proc. 2024-40
const FED_S=[
  {min:0,      max:11925,  r:.10},
  {min:11925,  max:48475,  r:.12},
  {min:48475,  max:103350, r:.22},
  {min:103350, max:197300, r:.24},
  {min:197300, max:250525, r:.32},
  {min:250525, max:626350, r:.35},
  {min:626350, max:Infinity,r:.37},
];
const FED_M=[
  {min:0,      max:23850,  r:.10},
  {min:23850,  max:96950,  r:.12},
  {min:96950,  max:206700, r:.22},
  {min:206700, max:394600, r:.24},
  {min:394600, max:501050, r:.32},
  {min:501050, max:751600, r:.35},
  {min:751600, max:Infinity,r:.37},
];
const FED_HOH=[
  {min:0,      max:17000,  r:.10},
  {min:17000,  max:64850,  r:.12},
  {min:64850,  max:103350, r:.22},
  {min:103350, max:197300, r:.24},
  {min:197300, max:250500, r:.32},
  {min:250500, max:626350, r:.35},
  {min:626350, max:Infinity,r:.37},
];
// 2025 Standard deductions — IRS Publication 505
const STD={single:15000,mfj:30000,hoh:22500};
const FILING={single:"Single",mfj:"Married Filing Jointly",hoh:"Head of Household"};
// 2025 estimated tax due dates (IRS)
const QDATES=[{q:"Q1",due:"April 15, 2025",period:"Jan–Mar 2025"},{q:"Q2",due:"June 16, 2025",period:"Apr–May 2025"},{q:"Q3",due:"Sept 15, 2025",period:"Jun–Aug 2025"},{q:"Q4",due:"Jan 15, 2026",period:"Sep–Dec 2025"}];

// ── Federal tax using progressive brackets ────────────────────────────────
function fedTax(inc,status){
  const b=status==="mfj"?FED_M:status==="hoh"?FED_HOH:FED_S;
  let t=0;
  for(const br of b){
    if(inc<=br.min) break;
    t+=(Math.min(inc,br.max)-br.min)*br.r;
  }
  return t;
}

// ── Main tax calculation ──────────────────────────────────────────────────
function calcTaxes({gross,status,state,ded}){
  // Self-employment tax (Schedule SE)
  // 2025 SS wage base: $176,100
  const netSE = gross * 0.9235;
  const ss    = Math.min(netSE, 176100) * 0.124;  // Social Security (12.4%)
  const med   = netSE * 0.029;                      // Medicare base (2.9%)
  // Additional Medicare Tax: 0.9% on SE income above $200k (single/HOH) or $250k (MFJ)
  const addlMedThresh = status==="mfj" ? 250000 : 200000;
  const addlMed = Math.max(0, netSE - addlMedThresh) * 0.009;
  const se    = ss + med + addlMed;
  const seDed = se / 2; // Half of SE tax is deductible

  // Standard deduction
  const std = status==="mfj" ? STD.mfj : status==="hoh" ? STD.hoh : STD.single;

  // Federal taxable income
  const totalDed = std + seDed + (ded||0);
  const fedInc   = Math.max(0, gross - totalDed);
  const fed      = fedTax(fedInc, status);

  // State tax — applied to gross minus standard deduction (conservative estimate)
  // For states with flat rates this is accurate. For progressive states this
  // uses the top marginal rate which may overestimate for lower incomes.
  const stBase = Math.max(0, gross - std);
  const stTax  = stBase * (STATE_TAXES[state]||0) / 100;

  const allTax = fed + se + stTax;
  const eff    = gross > 0 ? (allTax / gross) * 100 : 0;

  return {
    fed, se, stTax, allTax, eff,
    home: gross - allTax,
    qtr:  allTax / 4,
    std, seDed, fedInc,
    gross, // include for reference
    addlMed, // additional medicare for display
  };
}

// ─── PLANS ───────────────────────────────────────────────────────────────────────
const PLANS = {
  free:     { name:"Free",     price:0,   period:"",    platformLimit:1,  color:"#60607a", badge:"FREE"     },
  pro:      { name:"Gold",     price:12,  period:"/mo", platformLimit:5,  color:"#f5a623", badge:"GOLD"    },
  business: { name:"Platinum", price:29,  period:"/mo", platformLimit:Infinity, color:"#a259ff", badge:"PLATINUM" },
};

// ─── SEED DATA ────────────────────────────────────────────────────────────────
const SEED=[
  {id:101,platform:"YouTube",amount:420,month:0,year:2024,note:"Ad revenue"},{id:102,platform:"Patreon",amount:210,month:0,year:2024,note:"Members"},
  {id:103,platform:"YouTube",amount:490,month:1,year:2024,note:"Ad revenue"},{id:104,platform:"Patreon",amount:240,month:1,year:2024,note:"Members"},
  {id:105,platform:"YouTube",amount:530,month:2,year:2024,note:"Ad revenue"},{id:106,platform:"Sponsorship",amount:800,month:2,year:2024,note:"Brand deal"},{id:107,platform:"Patreon",amount:280,month:2,year:2024,note:"Members"},
  {id:108,platform:"YouTube",amount:610,month:3,year:2024,note:"Ad revenue"},{id:109,platform:"Affiliate",amount:190,month:3,year:2024,note:"Amazon"},{id:110,platform:"Patreon",amount:310,month:3,year:2024,note:"Members"},
  {id:111,platform:"YouTube",amount:720,month:4,year:2024,note:"Ad revenue"},{id:112,platform:"Sponsorship",amount:1200,month:4,year:2024,note:"Brand deal"},{id:113,platform:"Merch",amount:340,month:4,year:2024,note:"Spring drop"},{id:114,platform:"Patreon",amount:350,month:4,year:2024,note:"Members"},
  {id:115,platform:"YouTube",amount:880,month:5,year:2024,note:"Ad revenue"},{id:116,platform:"Affiliate",amount:220,month:5,year:2024,note:"Amazon"},{id:117,platform:"Patreon",amount:390,month:5,year:2024,note:"Members"},
  {id:118,platform:"YouTube",amount:940,month:6,year:2024,note:"Ad revenue"},{id:119,platform:"Sponsorship",amount:1500,month:6,year:2024,note:"Brand deal"},{id:120,platform:"Merch",amount:410,month:6,year:2024,note:"Summer drop"},{id:121,platform:"Patreon",amount:420,month:6,year:2024,note:"Members"},
  {id:122,platform:"YouTube",amount:870,month:7,year:2024,note:"Ad revenue"},{id:123,platform:"Affiliate",amount:260,month:7,year:2024,note:"Amazon"},{id:124,platform:"Patreon",amount:450,month:7,year:2024,note:"Members"},
  {id:125,platform:"YouTube",amount:990,month:8,year:2024,note:"Ad revenue"},{id:126,platform:"Sponsorship",amount:1800,month:8,year:2024,note:"Brand deal"},{id:127,platform:"Patreon",amount:480,month:8,year:2024,note:"Members"},
  {id:128,platform:"YouTube",amount:1100,month:9,year:2024,note:"Ad revenue"},{id:129,platform:"Merch",amount:520,month:9,year:2024,note:"Fall drop"},{id:130,platform:"Affiliate",amount:310,month:9,year:2024,note:"Amazon"},{id:131,platform:"Patreon",amount:510,month:9,year:2024,note:"Members"},
  {id:132,platform:"YouTube",amount:1250,month:10,year:2024,note:"Ad revenue"},{id:133,platform:"Sponsorship",amount:2000,month:10,year:2024,note:"Brand deal"},{id:134,platform:"Patreon",amount:540,month:10,year:2024,note:"Members"},
  {id:135,platform:"YouTube",amount:1400,month:11,year:2024,note:"Ad revenue"},{id:136,platform:"Merch",amount:780,month:11,year:2024,note:"Holiday drop"},{id:137,platform:"Affiliate",amount:420,month:11,year:2024,note:"Amazon"},{id:138,platform:"Patreon",amount:580,month:11,year:2024,note:"Members"},
  {id:201,platform:"YouTube",amount:980,month:0,year:2025,note:"Ad revenue"},{id:202,platform:"Patreon",amount:620,month:0,year:2025,note:"Members"},{id:203,platform:"Sponsorship",amount:1200,month:0,year:2025,note:"Brand deal"},
  {id:204,platform:"YouTube",amount:1050,month:1,year:2025,note:"Ad revenue"},{id:205,platform:"Patreon",amount:650,month:1,year:2025,note:"Members"},{id:206,platform:"Affiliate",amount:280,month:1,year:2025,note:"Amazon"},
  {id:207,platform:"YouTube",amount:1180,month:2,year:2025,note:"Ad revenue"},{id:208,platform:"Sponsorship",amount:2000,month:2,year:2025,note:"Brand deal"},{id:209,platform:"Patreon",amount:680,month:2,year:2025,note:"Members"},{id:210,platform:"Merch",amount:390,month:2,year:2025,note:"Spring drop"},
  {id:211,platform:"YouTube",amount:1320,month:3,year:2025,note:"Ad revenue"},{id:212,platform:"Patreon",amount:710,month:3,year:2025,note:"Members"},{id:213,platform:"Affiliate",amount:340,month:3,year:2025,note:"Amazon"},
  {id:214,platform:"YouTube",amount:1420,month:4,year:2025,note:"Ad revenue"},{id:215,platform:"Sponsorship",amount:2500,month:4,year:2025,note:"Brand deal"},{id:216,platform:"Merch",amount:480,month:4,year:2025,note:"Spring drop"},{id:217,platform:"Patreon",amount:740,month:4,year:2025,note:"Members"},
  {id:218,platform:"YouTube",amount:1380,month:5,year:2025,note:"Ad revenue"},{id:219,platform:"Patreon",amount:770,month:5,year:2025,note:"Members"},{id:220,platform:"Affiliate",amount:390,month:5,year:2025,note:"Amazon"},
  {id:221,platform:"YouTube",amount:1500,month:6,year:2025,note:"Ad revenue"},{id:222,platform:"Sponsorship",amount:3000,month:6,year:2025,note:"Brand deal"},{id:223,platform:"Merch",amount:560,month:6,year:2025,note:"Summer drop"},{id:224,platform:"Patreon",amount:800,month:6,year:2025,note:"Members"},
  {id:225,platform:"YouTube",amount:1620,month:7,year:2025,note:"Ad revenue"},{id:226,platform:"Patreon",amount:830,month:7,year:2025,note:"Members"},{id:227,platform:"Affiliate",amount:410,month:7,year:2025,note:"Amazon"},
  {id:228,platform:"YouTube",amount:1690,month:8,year:2025,note:"Ad revenue"},{id:229,platform:"Sponsorship",amount:2800,month:8,year:2025,note:"Brand deal"},{id:230,platform:"Patreon",amount:860,month:8,year:2025,note:"Members"},
  {id:231,platform:"YouTube",amount:1750,month:9,year:2025,note:"Ad revenue"},{id:232,platform:"Merch",amount:640,month:9,year:2025,note:"Fall drop"},{id:233,platform:"Affiliate",amount:440,month:9,year:2025,note:"Amazon"},{id:234,platform:"Patreon",amount:890,month:9,year:2025,note:"Members"},
  {id:235,platform:"YouTube",amount:1900,month:10,year:2025,note:"Ad revenue"},{id:236,platform:"Sponsorship",amount:3500,month:10,year:2025,note:"Brand deal"},{id:237,platform:"Patreon",amount:920,month:10,year:2025,note:"Members"},{id:240,platform:"Affiliate",amount:510,month:10,year:2025,note:"Amazon"},
  {id:238,platform:"YouTube",amount:2100,month:11,year:2025,note:"Ad revenue"},{id:239,platform:"Merch",amount:980,month:11,year:2025,note:"Holiday drop"},{id:241,platform:"Patreon",amount:950,month:11,year:2025,note:"Members"},{id:242,platform:"Sponsorship",amount:4000,month:11,year:2025,note:"Holiday brand deal"},
  {id:301,platform:"YouTube",amount:980,month:0,year:2026,note:"Ad revenue"},{id:302,platform:"Patreon",amount:790,month:0,year:2026,note:"Members"},{id:303,platform:"Sponsorship",amount:1800,month:0,year:2026,note:"Brand deal"},
  {id:304,platform:"YouTube",amount:1240,month:1,year:2026,note:"Ad revenue"},{id:305,platform:"Patreon",amount:850,month:1,year:2026,note:"Members"},
  {id:306,platform:"Sponsorship",amount:2500,month:2,year:2026,note:"NordVPN deal"},{id:307,platform:"YouTube",amount:1240,month:2,year:2026,note:"Ad revenue"},{id:308,platform:"Patreon",amount:850,month:2,year:2026,note:"Members"},{id:309,platform:"Merch",amount:430,month:2,year:2026,note:"Spring drop"},{id:310,platform:"Affiliate",amount:310,month:2,year:2026,note:"Amazon links"},
];

function getPM(n){return PLATFORMS.find(p=>p.name===n)||PLATFORMS[PLATFORMS.length-1];}


// ─── EXPENSE CATEGORIES ───────────────────────────────────────────────────────
const EXP_CATS = [
  { id:"software",    label:"Software & Tools",       icon:"💻", color:"#7B8CFF", desc:"Editing apps, SaaS, subscriptions" },
  { id:"production",  label:"Content Production",     icon:"🎬", color:"#FF6B9D", desc:"Equipment, props, studio time" },
  { id:"marketing",   label:"Marketing & Ads",        icon:"📣", color:"#FFD426", desc:"Paid promotions, boosted posts" },
  { id:"contractors", label:"Contractors",            icon:"👥", color:"#00C896", desc:"Editors, designers, managers" },
  { id:"fees",        label:"Platform Fees",          icon:"💳", color:"#FF4455", desc:"Processing fees, platform cuts" },
  { id:"travel",      label:"Travel & Workspace",     icon:"✈️", color:"#00AFF0", desc:"Travel, internet, phone, office" },
  { id:"other",       label:"Other Business",         icon:"📦", color:"#888",    desc:"Miscellaneous business expenses" },
];

// recurringFreq: "monthly" | "quarterly" | "yearly" | null
// recurringStart: "YYYY-MM-DD" — the first date it was created, used to auto-generate future entries
const SEED_EXPENSES = [
  { id:"e1",  date:"2026-02-01", amount:59,  category:"software",    name:"Adobe Creative Cloud",  note:"Monthly subscription",   recurring:true,  recurringFreq:"monthly",  recurringStart:"2026-01-01", type:"expense", taxDeduction:true },
  { id:"e2",  date:"2026-02-01", amount:16,  category:"software",    name:"Notion Pro",             note:"Workspace tool",         recurring:true,  recurringFreq:"monthly",  recurringStart:"2026-01-01", type:"expense", taxDeduction:true },
  { id:"e3",  date:"2026-02-15", amount:145, category:"fees",        name:"Stripe Processing Fees", note:"2.9% on payouts",        recurring:false, recurringFreq:null,       recurringStart:null,         type:"fee", taxDeduction:false     },
  { id:"e4",  date:"2026-02-10", amount:500, category:"contractors", name:"Video Editor — Jake",    note:"Feb editing hours",      recurring:false, recurringFreq:null,       recurringStart:null,         type:"expense", taxDeduction:true },
  { id:"e5",  date:"2026-02-05", amount:200, category:"marketing",   name:"Instagram Boost",        note:"Spring drop promotion",  recurring:false, recurringFreq:null,       recurringStart:null,         type:"expense", taxDeduction:false },
  { id:"e6",  date:"2026-02-01", amount:29,  category:"software",    name:"TubeBuddy Pro",          note:"YouTube analytics tool", recurring:true,  recurringFreq:"monthly",  recurringStart:"2026-01-01", type:"expense", taxDeduction:true },
  { id:"e7",  date:"2026-02-20", amount:89,  category:"fees",        name:"PayPal Fees",            note:"Sponsor payment fees",   recurring:false, recurringFreq:null,       recurringStart:null,         type:"fee", taxDeduction:false     },
  { id:"e8",  date:"2026-02-18", amount:320, category:"production",  name:"Lighting Kit",           note:"Studio upgrade",         recurring:false, recurringFreq:null,       recurringStart:null,         type:"expense", taxDeduction:true },
  { id:"e9",  date:"2026-02-01", amount:79,  category:"travel",      name:"Internet Bill",          note:"Home office internet",   recurring:true,  recurringFreq:"monthly",  recurringStart:"2026-01-01", type:"expense", taxDeduction:true },
  { id:"e10", date:"2026-02-01", amount:49,  category:"software",    name:"Epidemic Sound",         note:"Music licensing",        recurring:true,  recurringFreq:"monthly",  recurringStart:"2026-01-01", type:"expense", taxDeduction:true },
  { id:"e11", date:"2026-01-01", amount:59,  category:"software",    name:"Adobe Creative Cloud",   note:"Monthly subscription",   recurring:true,  recurringFreq:"monthly",  recurringStart:"2026-01-01", type:"expense", taxDeduction:true },
  { id:"e12", date:"2026-01-15", amount:122, category:"fees",        name:"Stripe Processing Fees", note:"2.9% on payouts",        recurring:false, recurringFreq:null,       recurringStart:null,         type:"fee", taxDeduction:false     },
  { id:"e13", date:"2026-01-10", amount:400, category:"contractors", name:"Video Editor — Jake",    note:"Jan editing hours",      recurring:false, recurringFreq:null,       recurringStart:null,         type:"expense", taxDeduction:true },
  { id:"e14", date:"2026-01-01", amount:29,  category:"software",    name:"TubeBuddy Pro",          note:"YouTube analytics tool", recurring:true,  recurringFreq:"monthly",  recurringStart:"2026-01-01", type:"expense", taxDeduction:true },
  { id:"e15", date:"2026-01-01", amount:79,  category:"travel",      name:"Internet Bill",          note:"Home office internet",   recurring:true,  recurringFreq:"monthly",  recurringStart:"2026-01-01", type:"expense", taxDeduction:true },
  { id:"e16", date:"2026-01-01", amount:49,  category:"software",    name:"Epidemic Sound",         note:"Music licensing",        recurring:true,  recurringFreq:"monthly",  recurringStart:"2026-01-01", type:"expense", taxDeduction:true },
  { id:"e17", date:"2026-01-01", amount:16,  category:"software",    name:"Notion Pro",             note:"Workspace tool",         recurring:true,  recurringFreq:"monthly",  recurringStart:"2026-01-01", type:"expense", taxDeduction:true },
  { id:"e18", date:"2026-01-25", amount:750, category:"production",  name:"Camera Lens",            note:"85mm portrait lens",     recurring:false, recurringFreq:null,       recurringStart:null,         type:"expense", taxDeduction:true },
  // Quarterly example — appears in Jan, Apr, Jul, Oct
  { id:"e19", date:"2026-01-01", amount:299, category:"software",    name:"Screenflow License",     note:"Annual video editor",    recurring:true,  recurringFreq:"quarterly", recurringStart:"2026-01-01", type:"expense", taxDeduction:true },
  // Yearly example — appears once in Jan
  { id:"e20", date:"2026-01-01", amount:120, category:"software",    name:"LastPass Teams",         note:"Password manager — yearly", recurring:true, recurringFreq:"yearly", recurringStart:"2026-01-01", type:"expense", taxDeduction:true },
];

// ─── THEME ────────────────────────────────────────────────────────────────────
function T(dark){
  if(dark) return{
    bg:"#08080f",surf:"#111120",brd:"#1e1e30",
    txt:"#edeae0",mut:"#60607a",fnt:"#23233a",
    acc:"#00d4a0",dan:"#ff4455",wrn:"#ffd426",
    inp:"#0c0c1a",nav:"#08080f",
    crd:"#111120",cbrd:"#1e1e30",
    glo:"rgba(0,212,160,0.18)",
    // contextual backgrounds — no dark? ternaries needed
    successBg:"#071a12", warnBg:"#1a1500", errBg:"#1a0a0c",
    grandBg:"#1a0a0c", homeBg:"#071a12", selBg:"#0c1f17",
    ctaBg:"#0b0b18",
  };
  return{
    bg:"#f2efe8",surf:"#ffffff",brd:"#dedad2",
    txt:"#1a1710",mut:"#70706a",fnt:"#ccc8c0",
    acc:"#009970",dan:"#cc2233",wrn:"#a07800",
    inp:"#f8f5ee",nav:"#ffffff",
    crd:"#ffffff",cbrd:"#dedad2",
    glo:"rgba(0,153,112,0.12)",
    successBg:"#e8f9f4", warnBg:"#fffbee", errBg:"#fff0f2",
    grandBg:"#fff0f2", homeBg:"#e8f9f4", selBg:"#e8f9f4",
    ctaBg:"#1e1a12",
  };
}

// ─── CSV EXPORT ───────────────────────────────────────────────────────────────
function exportCSV(entries,year){
  const rows=[["Year","Month","Platform","Amount","Note"]];
  entries.filter(e=>!year||e.year===year).forEach(e=>rows.push([e.year,MONTHS[e.month],e.platform,e.amount.toFixed(2),e.note||""]));
  const csv=rows.map(r=>r.map(v=>`"${String(v).replace(/"/g,'""')}"`).join(",")).join("\n");
  const blob=new Blob([csv],{type:"text/csv"}),url=URL.createObjectURL(blob),a=document.createElement("a");
  a.href=url; a.download=`creatorflow-${year||"all"}.csv`; a.click(); URL.revokeObjectURL(url);
}

// ─── GLOBAL CSS ───────────────────────────────────────────────────────────────
// NOTE: All theme-sensitive CSS is passed as inline styles on elements, not classes.
// CSS classes here only handle animations and hover states that depend on the current theme.
function GlobalCSS({dark}){
  const t=T(dark);
  return <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&family=Outfit:wght@700;800;900&display=swap');
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { font-size: 16px; }
    body {
      background: ${t.bg};
      font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
      color: ${t.txt};
      -webkit-font-smoothing: antialiased;
      text-rendering: optimizeLegibility;
    }
    ::-webkit-scrollbar { width: 5px; }
    ::-webkit-scrollbar-track { background: ${t.bg}; }
    ::-webkit-scrollbar-thumb { background: ${t.fnt}; border-radius: 3px; }
    input, select, textarea {
      font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
      outline: none;
      color: ${t.txt};
    }
    /* ── Animations ── */
    @keyframes pulse  { 0%,100%{opacity:1} 50%{opacity:.35} }
    @keyframes spin   { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
    @keyframes slideUp{ from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }
    @keyframes shimmer{ 0%{background-position:-200% 0} 100%{background-position:200% 0} }
    /* ── Utility classes ── */
    .fi  { opacity:0; transform:translateY(14px); transition:opacity .48s cubic-bezier(.23,1,.32,1), transform .48s cubic-bezier(.23,1,.32,1); }
    .fi.on { opacity:1; transform:translateY(0); }
    .bf  { transition: width 1.1s cubic-bezier(.23,1,.32,1); }
    .gf  { transition: width 1.3s cubic-bezier(.23,1,.32,1); }
    .btn {
      cursor: pointer; border: none;
      font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
      transition: transform .15s ease, opacity .15s ease, box-shadow .15s ease;
    }
    .btn:hover  { transform: translateY(-2px); opacity: .92; }
    .btn:active { transform: translateY(0px);  opacity: 1;   }
    .ld { animation: pulse 2s infinite; }
    .sp { animation: spin .7s linear infinite; display: inline-block; }
    .su { animation: slideUp .38s cubic-bezier(.23,1,.32,1) forwards; }
    .sh {
      background: linear-gradient(90deg, ${dark?"#1e1e30":"#e4e0d8"} 25%, ${dark?"#252540":"#edeae2"} 50%, ${dark?"#1e1e30":"#e4e0d8"} 75%);
      background-size: 200% 100%;
      animation: shimmer 1.5s infinite;
    }
    /* ── Theme-aware hover states ── */
    .dz { transition: all .2s; }
    .dz.dg { border-color: ${t.acc} !important; background: ${t.successBg} !important; }
    .rr { animation: slideUp .28s ease forwards; opacity: 0; }
    .rr:hover  { background: ${dark?"#16162a":"#eceae2"} !important; }
    .nb { cursor:pointer; border:none; font-family:'Plus Jakarta Sans',system-ui,sans-serif; transition:all .18s; background:transparent; }
    .nb:hover  { color: ${t.txt} !important; }
    .hr:hover  { background: ${dark?"#16162a":"#eceae2"} !important; }
    .db { opacity:0; transition:opacity .15s; } .hr:hover .db { opacity:1; }
    .mb:hover  { background: ${t.brd} !important; }
    .crd:hover { transform:translateY(-3px); box-shadow:0 14px 40px ${t.glo}; }
    .si:focus  { border-color: ${t.acc} !important; }
    .bdr:hover { background: ${dark?"#16162a":"#eceae2"} !important; }
    select option { background: ${t.surf}; color: ${t.txt}; }
    /* Mobile base */
    @media (max-width: 768px) {
      html { font-size: 15px; }
      body { overflow-x: hidden; }
    }
    .tax-ring  { transition: stroke-dasharray .9s cubic-bezier(.23,1,.32,1); }
    .pl-row:hover { background: ${dark?"#16162a":"#f0ece4"} !important; border-radius: 10px; }
    /* ── Card transitions ── */
    .card { transition: transform .2s ease, box-shadow .2s ease; }
    .card:hover { transform: translateY(-3px); box-shadow: 0 12px 40px ${t.glo}; }
  `}</style>;
}

// ─── TOOLTIP ─────────────────────────────────────────────────────────────────
function CTip({active,payload,label,dark}){
  const t=T(dark);
  if(!active||!payload?.length) return null;
  return(
    <div style={{background:t.surf,border:`1px solid ${t.brd}`,padding:"12px 16px",borderRadius:"12px",boxShadow:"0 8px 24px rgba(0,0,0,.18)"}}>
      <div style={{fontSize:"11px",color:t.mut,fontWeight:600,letterSpacing:".5px",marginBottom:"6px"}}>{label}</div>
      {payload.map(p=>(
        <div key={p.dataKey} style={{fontSize:"14px",fontWeight:700,color:p.color,lineHeight:1.5}}>
          {p.name}: <span style={{color:t.txt}}>${(p.value||0).toLocaleString()}</span>
        </div>
      ))}
    </div>
  );
}

// ─── STAT CARD ────────────────────────────────────────────────────────────────
function StatCard({label,value,sub,subColor,delay,t,animIn,icon,topColor}){
  return(
    <div className={`fi card ${animIn?"on":""}`} style={{
      background:t.crd, border:`1.5px solid ${t.cbrd}`, borderRadius:"16px",
      padding:"24px 26px", transitionDelay:delay, position:"relative", overflow:"hidden",
    }}>
      {topColor && <div style={{position:"absolute",top:0,left:0,right:0,height:"3px",background:`linear-gradient(90deg,${topColor},${topColor}00)`}}/>}
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"14px"}}>
        <div style={{fontSize:"11px",color:t.mut,fontWeight:700,letterSpacing:"1.2px",textTransform:"uppercase"}}>{label}</div>
        {icon && <span style={{fontSize:"20px",lineHeight:1}}>{icon}</span>}
      </div>
      <div style={{fontFamily:"'Outfit',sans-serif",fontSize:"34px",fontWeight:800,color:t.txt,lineHeight:1,marginBottom:"8px"}}>{value}</div>
      <div style={{fontSize:"13px",color:subColor||t.mut,fontWeight:500}}>{sub}</div>
    </div>
  );
}

// ─── STATE PICKER ─────────────────────────────────────────────────────────────
function StatePicker({value,onChange,t}){
  const [search,setSearch]=useState(""),[ open,setOpen]=useState(false),ref=useRef();
  const states=Object.keys(STATE_TAXES).sort();
  const filtered=states.filter(s=>s.toLowerCase().includes(search.toLowerCase()));
  useEffect(()=>{
    if(!open)return;
    const h=e=>{if(ref.current&&!ref.current.contains(e.target))setOpen(false);};
    document.addEventListener("mousedown",h);
    return()=>document.removeEventListener("mousedown",h);
  },[open]);
  const base={
    background:t.inp,border:`1.5px solid ${t.brd}`,color:t.txt,
    padding:"12px 16px",fontSize:"14px",borderRadius:"10px",
    fontFamily:"'Plus Jakarta Sans',system-ui,sans-serif",width:"100%",
  };
  return(
    <div style={{position:"relative"}} ref={ref}>
      <div onClick={()=>setOpen(v=>!v)} style={{...base,cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",borderColor:open?t.acc:t.brd,transition:"border-color .2s"}}>
        <span style={{color:value?t.txt:t.mut,fontWeight:value?600:400}}>{value||"Select your state…"}</span>
        <span style={{color:t.mut,fontSize:"12px",marginLeft:"8px"}}>{open?"▲":"▼"}</span>
      </div>
      {open&&(
        <div style={{position:"absolute",top:"calc(100% + 6px)",left:0,right:0,zIndex:300,background:t.surf,border:`1.5px solid ${t.brd}`,borderRadius:"14px",boxShadow:"0 16px 48px rgba(0,0,0,.22)",overflow:"hidden"}}>
          <div style={{padding:"10px"}}>
            <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search states…" autoFocus className="si"
              style={{...base,padding:"9px 13px",fontSize:"13px",borderRadius:"8px"}}/>
          </div>
          <div style={{maxHeight:"220px",overflowY:"auto"}}>
            {filtered.map(s=>(
              <div key={s} onClick={()=>{onChange(s);setOpen(false);setSearch("");}} className="bdr"
                style={{padding:"11px 16px",fontSize:"14px",fontWeight:s===value?700:400,color:s===value?t.acc:t.txt,cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <span>{s}</span>
                <span style={{fontSize:"12px",color:t.mut,background:t.inp,padding:"2px 9px",borderRadius:"6px",fontWeight:500}}>
                  {STATE_TAXES[s]===0?"No tax":`${STATE_TAXES[s]}%`}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── DASHBOARD TAB ────────────────────────────────────────────────────────────
function MonthlyDetailTab({entries,setEntries,dark,selMonth,setSelMonth,selYear,userProfile,addEntry,deleteEntry,plan="free",onUpgrade}){
  const t=T(dark);
  const w=useW();
  const [animIn,setAnimIn]=useState(false);
  useEffect(()=>{setTimeout(()=>setAnimIn(true),60);},[]);
  const [showForm,setShowForm]=useState(false);
  const [goal,setGoal]=useState(8000);
  const [goalOn,setGoalOn]=useState(true);
  const [editGoal,setEditGoal]=useState(false);
  const [draftGoal,setDraftGoal]=useState("8000");
  const [form,setForm]=useState({platform:"YouTube",amount:"",note:""});
  const availYears=[...new Set(entries.map(e=>e.year))].sort((a,b)=>b-a);
  const [activeYear,setActiveYear]=useState(selYear);

  const cur=entries.filter(e=>e.month===selMonth&&e.year===activeYear);
  const pm=selMonth===0?11:selMonth-1, py=selMonth===0?activeYear-1:activeYear;
  const prev=entries.filter(e=>e.month===pm&&e.year===py);
  const total=cur.reduce((s,e)=>s+e.amount,0);
  const prevTot=prev.reduce((s,e)=>s+e.amount,0);
  const growth=prevTot>0?((total-prevTot)/prevTot*100).toFixed(1):null;
  const goalPct=goalOn?Math.min((total/goal)*100,100).toFixed(1):"0";
  const byP=PLATFORMS.map(p=>({...p,total:cur.filter(e=>e.platform===p.name).reduce((s,e)=>s+e.amount,0)})).filter(p=>p.total>0).sort((a,b)=>b.total-a.total);
  const maxB=byP[0]?.total||1;

  // Real tax estimate — uses the user's saved state & filing status if available
  const hasProfile = userProfile?.state && userProfile.state.length > 0;
  const taxEst = hasProfile && total > 0
    ? calcTaxes({gross:total, status:userProfile.filingStatus||"single", state:userProfile.state, ded:0})
    : null;
  const stateRate = hasProfile ? (STATE_TAXES[userProfile.state]||0) : null;
  const effectivePct = taxEst ? taxEst.eff.toFixed(1) : null;
  const takeHome = taxEst ? taxEst.home : total * 0.75;
  const taxAside = taxEst ? taxEst.allTax : total * 0.25;

  function saveGoal(){
    if(draftGoal==="na"){setGoalOn(false);}
    else{const v=parseFloat(draftGoal);if(!isNaN(v)&&v>0){setGoal(v);setGoalOn(true);}}
    setEditGoal(false);
  }

  const inp={background:t.inp,border:`1.5px solid ${t.brd}`,color:t.txt,padding:"11px 15px",fontSize:"14px",width:"100%",borderRadius:"10px",fontFamily:"'Plus Jakarta Sans',system-ui,sans-serif"};

  return (
    <>
      {/* Period row */}
      <div className={`fi ${animIn?"on":""}`} style={{display:"flex",alignItems:"center",gap:"8px",marginBottom:"28px",flexWrap:"wrap"}}>
        <span style={{fontSize:"11px",color:t.mut,fontWeight:700,letterSpacing:"1px",marginRight:"4px"}}>PERIOD</span>
        {MONTHS.map((m,i)=>(
          <button key={m} className="mb btn" onClick={()=>setSelMonth(i)} style={{
            padding:w<600?"6px 9px":"8px 14px",fontSize:w<600?"11px":"13px",fontWeight:600,
            background:selMonth===i?t.acc:"transparent",
            color:selMonth===i?"#fff":t.mut,
            border:`1.5px solid ${selMonth===i?t.acc:t.brd}`,
            borderRadius:"8px",
          }}>{m}</button>
        ))}
        {/* Year styled dropdown */}
        <div style={{display:"flex",alignItems:"center",gap:"8px",marginLeft:"10px",paddingLeft:"12px",borderLeft:`1.5px solid ${t.brd}`}}>
          <span style={{fontSize:"11px",color:t.mut,fontWeight:700,letterSpacing:"1px"}}>YEAR</span>
          <div style={{position:"relative",display:"inline-flex",alignItems:"center"}}>
            <select value={activeYear} onChange={e=>setActiveYear(Number(e.target.value))} style={{
              appearance:"none",WebkitAppearance:"none",
              background:t.crd,border:`1.5px solid ${t.brd}`,color:t.txt,
              padding:"8px 36px 8px 16px",fontSize:"14px",fontWeight:700,
              borderRadius:"10px",cursor:"pointer",
              fontFamily:"'Plus Jakarta Sans',system-ui,sans-serif",
              boxShadow:"0 2px 8px rgba(0,0,0,0.12)",
              outline:"none",
            }}>
              {availYears.map(y=><option key={y} value={y}>{y}{y===selYear?" (current)":""}</option>)}
            </select>
            <span style={{position:"absolute",right:"12px",pointerEvents:"none",color:t.mut,fontSize:"12px"}}>▾</span>
          </div>
          {activeYear!==selYear&&(
            <span style={{fontSize:"12px",color:t.wrn,fontWeight:700,background:`${t.wrn}20`,padding:"4px 10px",borderRadius:"6px"}}>Viewing {activeYear}</span>
          )}
        </div>
      </div>

      {/* ── Hero income card ── */}
      <div className={`fi ${animIn?"on":""}`} style={{
        background:`linear-gradient(135deg,${t.acc}22,${t.acc}06)`,
        border:`1.5px solid ${t.acc}55`,
        borderRadius:"20px",padding:"28px 36px",marginBottom:"16px",
        transitionDelay:"0.05s",position:"relative",overflow:"hidden",
      }}>
        <div style={{position:"absolute",top:"-50px",right:"-50px",width:"200px",height:"200px",borderRadius:"50%",background:t.acc,opacity:.06,pointerEvents:"none"}}/>
        <div style={{display:"flex",alignItems:"flex-end",justifyContent:"space-between",flexWrap:"wrap",gap:"20px"}}>
          <div>
            <div style={{fontSize:"12px",color:t.acc,fontWeight:700,letterSpacing:"1.5px",textTransform:"uppercase",marginBottom:"12px"}}>
              Total Income — {MONTHS[selMonth]} {activeYear}
            </div>
            <div style={{fontFamily:"'Outfit',sans-serif",fontSize:"clamp(44px,5.5vw,68px)",fontWeight:800,color:t.txt,lineHeight:1,letterSpacing:"-1px"}}>
              {`$${total.toLocaleString()}`}
            </div>
            <div style={{marginTop:"14px",display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap"}}>
              {growth?(
                <span style={{display:"inline-flex",alignItems:"center",gap:"6px",background:Number(growth)>0?`${t.acc}22`:`${t.dan}22`,border:`1px solid ${Number(growth)>0?t.acc:t.dan}44`,padding:"5px 12px",borderRadius:"8px",fontSize:"14px",fontWeight:700,color:Number(growth)>0?t.acc:t.dan}}>
                  {Number(growth)>0?"▲":"▼"} {Math.abs(Number(growth))}% vs last month
                </span>
              ):(
                <span style={{fontSize:"13px",color:t.mut}}>First month on record</span>
              )}
            </div>
          </div>
          <div style={{textAlign:"right",background:`${t.acc}14`,border:`1px solid ${t.acc}33`,padding:"16px 22px",borderRadius:"14px",minWidth:"180px"}}>
            <div style={{fontSize:"11px",color:t.acc,fontWeight:700,letterSpacing:"1.2px",textTransform:"uppercase",marginBottom:"8px"}}>🏦 Est. Take Home</div>
            <div style={{fontFamily:"'Outfit',sans-serif",fontSize:"34px",fontWeight:800,color:t.txt,lineHeight:1}}>
              {`$${Math.round(takeHome).toLocaleString()}`}
            </div>
            <div style={{fontSize:"12px",color:t.mut,marginTop:"6px",lineHeight:1.4}}>
              {taxEst?`After ${effectivePct}% tax · ${userProfile.state}`:"~75% est. — add state in Tax tab"}
            </div>
          </div>
        </div>
      </div>

      {/* ── Supporting stats ── */}
      <div style={{display:"grid",gridTemplateColumns:w<600?"1fr":"repeat(3,1fr)",gap:"12px",marginBottom:"16px"}}>
        <StatCard
          label="Tax Set Aside"
          value={`$${Math.round(taxAside).toLocaleString()}`}
          sub={taxEst
            ? `Fed + SE${stateRate>0?" + "+userProfile.state+" state":""} · ${effectivePct}% rate`
            : "Set your state in Tax tab for exact figure"}
          subColor={t.wrn}
          delay="0.18s" t={t} animIn={animIn} icon="📋" topColor={t.wrn}
        />
        <StatCard label="Income Streams" value={byP.length} sub={`${cur.length} total transactions`} delay="0.24s" t={t} animIn={animIn} icon="📡" topColor="#ff6b9d"/>
        <StatCard label="Monthly Goal" value={goalOn?`${goalPct}%`:"Off"} sub={goalOn?(total>=goal?"🎉 Reached!":"$"+(goal-total).toLocaleString()+" to go"):"Tap Edit Goal to set one"} subColor={goalOn&&total>=goal?t.acc:t.mut} delay="0.30s" t={t} animIn={animIn} icon="🎯" topColor={goalOn?t.acc:t.fnt}/>
      </div>

      {/* Goal bar */}
      <div className={`fi ${animIn?"on":""}`} style={{background:t.crd,border:`1.5px solid ${t.cbrd}`,borderRadius:"16px",padding:"22px 26px",marginBottom:"20px",transitionDelay:"0.33s"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
            <span style={{fontSize:"22px"}}>🎯</span>
            <div>
              <div style={{fontSize:"12px",color:t.mut,fontWeight:700,letterSpacing:"1px",textTransform:"uppercase"}}>Monthly Goal</div>
              {goalOn&&!editGoal&&<div style={{fontSize:"13px",color:t.mut,marginTop:"3px"}}>Target: <strong style={{color:t.txt}}>${goal.toLocaleString()}</strong></div>}
              {!goalOn&&<div style={{fontSize:"13px",color:t.fnt,fontStyle:"italic",marginTop:"3px"}}>Goal tracking off</div>}
            </div>
          </div>
          <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
            {goalOn&&!editGoal&&<span style={{fontFamily:"'Outfit',sans-serif",fontSize:"26px",fontWeight:800,color:t.acc}}>{goalPct}%</span>}
            <button className="btn" onClick={()=>{setDraftGoal(goalOn?String(goal):"");setEditGoal(v=>!v);}} style={{background:t.inp,border:`1.5px solid ${t.brd}`,color:t.txt,padding:"9px 18px",fontSize:"13px",fontWeight:600,borderRadius:"8px"}}>
              {editGoal?"Cancel":"✎ Edit Goal"}
            </button>
          </div>
        </div>

        {editGoal&&(
          <div style={{marginTop:"16px",background:t.inp,border:`1.5px solid ${t.brd}`,borderRadius:"12px",padding:"18px"}}>
            <div style={{fontSize:"11px",color:t.mut,fontWeight:700,letterSpacing:"1px",textTransform:"uppercase",marginBottom:"12px"}}>Set Monthly Goal</div>
            <div style={{display:"flex",gap:"8px",flexWrap:"wrap",marginBottom:"14px"}}>
              {[1000,2500,5000,10000].map(v=>(
                <button key={v} className="btn" onClick={()=>setDraftGoal(String(v))} style={{padding:"9px 16px",fontSize:"13px",fontWeight:600,background:draftGoal===String(v)?t.acc:t.crd,color:draftGoal===String(v)?"#fff":t.mut,border:`1.5px solid ${draftGoal===String(v)?t.acc:t.brd}`,borderRadius:"8px"}}>
                  {`$${v.toLocaleString()}`}
                </button>
              ))}
              <button className="btn" onClick={()=>setDraftGoal("na")} style={{padding:"9px 16px",fontSize:"13px",fontWeight:600,background:draftGoal==="na"?t.dan:"transparent",color:draftGoal==="na"?"#fff":t.mut,border:`1.5px solid ${draftGoal==="na"?t.dan:t.brd}`,borderRadius:"8px"}}>
                N/A — Remove
              </button>
            </div>
            <div style={{display:"flex",gap:"10px",alignItems:"center"}}>
              <div style={{position:"relative",flex:1}}>
                <span style={{position:"absolute",left:"14px",top:"50%",transform:"translateY(-50%)",color:t.mut,fontSize:"16px",fontWeight:700}}>$</span>
                <input value={draftGoal==="na"?"":draftGoal} onChange={e=>setDraftGoal(e.target.value)} placeholder="Custom amount…" type="number" onKeyDown={e=>e.key==="Enter"&&saveGoal()}
                  style={{...inp,paddingLeft:"34px"}}/>
              </div>
              <button className="btn" onClick={saveGoal} style={{background:t.acc,color:"#fff",padding:"12px 22px",fontSize:"14px",fontWeight:700,borderRadius:"10px",whiteSpace:"nowrap"}}>Save →</button>
            </div>
          </div>
        )}

        {goalOn&&!editGoal&&(
          <div style={{marginTop:"16px"}}>
            <div style={{height:"10px",background:t.fnt,borderRadius:"5px",overflow:"hidden"}}>
              <div className="gf" style={{height:"100%",width:`${goalPct}%`,background:Number(goalPct)>=100?`linear-gradient(90deg,${t.acc},#7b8cff)`:`linear-gradient(90deg,${t.acc},${t.acc}bb)`,borderRadius:"5px"}}/>
            </div>
            <div style={{display:"flex",justifyContent:"space-between",marginTop:"8px"}}>
              <span style={{fontSize:"13px",color:t.mut,fontWeight:500}}>$0</span>
              <span style={{fontSize:"13px",fontWeight:600,color:total>=goal?t.acc:t.mut}}>
                {total>=goal?"🎉 Goal reached!":`$${(goal-total).toLocaleString()} to go`}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Bottom grid */}
      <div style={{display:"grid",gridTemplateColumns:w<700?"1fr":"1fr 1fr",gap:"16px"}}>
        {/* Platform breakdown */}
        <div className={`fi ${animIn?"on":""}`} style={{background:t.crd,border:`1.5px solid ${t.cbrd}`,borderRadius:"16px",padding:"24px",transitionDelay:"0.4s"}}>
          <div style={{fontSize:"12px",color:t.mut,fontWeight:700,letterSpacing:"1px",textTransform:"uppercase",marginBottom:"18px"}}>Income by Platform</div>
          {byP.length===0
            ?<div style={{textAlign:"center",padding:"32px 0",color:t.fnt,fontSize:"14px"}}>No income logged this month</div>
            :byP.map((p,i)=>(
              <div key={p.name} className="pl-row" style={{display:"flex",alignItems:"center",gap:"12px",padding:"10px 8px",marginBottom:"4px"}}>
                <PlatLogo name={p.name} size={32}/>
                <div style={{flex:1}}>
                  <div style={{display:"flex",justifyContent:"space-between",marginBottom:"6px"}}>
                    <span style={{fontSize:"14px",fontWeight:600,color:t.txt}}>{p.name}</span>
                    <span style={{fontSize:"14px",fontWeight:700,color:p.color}}>${p.total.toLocaleString()}</span>
                  </div>
                  <div style={{height:"6px",background:t.fnt,borderRadius:"3px",overflow:"hidden"}}>
                    <div className="bf" style={{height:"100%",width:animIn?`${(p.total/maxB)*100}%`:"0%",background:`linear-gradient(90deg,${p.color},${p.color}99)`,borderRadius:"3px",transitionDelay:`${.5+i*.07}s`,boxShadow:`0 0 8px ${p.glow}`}}/>
                  </div>
                </div>
              </div>
            ))
          }
        </div>

        {/* Transactions */}
        <div className={`fi ${animIn?"on":""}`} style={{background:t.crd,border:`1.5px solid ${t.cbrd}`,borderRadius:"16px",padding:"24px",transitionDelay:"0.47s"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"18px"}}>
            <div style={{fontSize:"12px",color:t.mut,fontWeight:700,letterSpacing:"1px",textTransform:"uppercase"}}>Transactions</div>
            <button className="btn" onClick={()=>setShowForm(v=>!v)} style={{background:showForm?"transparent":t.acc,color:showForm?t.mut:"#fff",padding:"9px 18px",fontSize:"13px",fontWeight:700,borderRadius:"8px",border:showForm?`1.5px solid ${t.brd}`:"none"}}>
              {showForm?"Cancel":"+ Add Income"}
            </button>
          </div>
          {showForm&&(
            <div style={{background:t.inp,border:`1.5px solid ${t.brd}`,borderRadius:"12px",padding:"16px",marginBottom:"16px"}}>
              <div style={{display:"grid",gridTemplateColumns:w<600?"1fr":"1fr 1fr",gap:"10px",marginBottom:"10px"}}>
                <div>
                  <div style={{fontSize:"11px",color:t.mut,fontWeight:600,marginBottom:"6px"}}>PLATFORM</div>
                  <select value={form.platform} onChange={e=>setForm({...form,platform:e.target.value})} style={inp}>
                    {PLATFORMS.map(p=><option key={p.name}>{p.name}</option>)}
                  </select>
                </div>
                <div>
                  <div style={{fontSize:"11px",color:t.mut,fontWeight:600,marginBottom:"6px"}}>AMOUNT ($)</div>
                  <input value={form.amount} onChange={e=>setForm({...form,amount:e.target.value})} placeholder="0.00" type="number" style={inp}/>
                </div>
              </div>
              <div style={{marginBottom:"12px"}}>
                <div style={{fontSize:"11px",color:t.mut,fontWeight:600,marginBottom:"6px"}}>NOTE (optional)</div>
                <input value={form.note} onChange={e=>setForm({...form,note:e.target.value})} placeholder="Ad revenue, brand deal…" style={inp}/>
              </div>
              {(()=>{
                const usedPlatforms=[...new Set(entries.map(e=>e.platform))];
                const limit=PLANS[plan]?.platformLimit||1;
                const wouldExceed=!usedPlatforms.includes(form.platform)&&usedPlatforms.length>=limit;
                return wouldExceed?(
                  <div style={{background:`${t.acc}10`,border:`1.5px solid ${t.acc}44`,borderRadius:"12px",padding:"14px",textAlign:"center"}}>
                    <div style={{fontSize:"18px",marginBottom:"6px"}}>⚡</div>
                    <div style={{fontSize:"13px",fontWeight:700,color:t.txt,marginBottom:"4px"}}>Platform limit reached</div>
                    <div style={{fontSize:"12px",color:t.mut,marginBottom:"12px"}}>Your <strong style={{color:t.txt}}>{PLANS[plan]?.name||"Free"}</strong> plan allows {limit} platform{limit!==1?"s":""}. Upgrade to track more.</div>
                    <button className="btn" onClick={onUpgrade} style={{background:`linear-gradient(135deg,${t.acc},#00a87a)`,color:"#fff",padding:"10px 24px",fontSize:"13px",fontWeight:700,borderRadius:"9px"}}>
                      See Plans →
                    </button>
                  </div>
                ):(
                  <button className="btn" onClick={async()=>{
                    if(!form.amount||isNaN(form.amount))return;
                    const newEntry={id:Date.now(),platform:form.platform,amount:parseFloat(form.amount),month:selMonth,year:activeYear,note:form.note};
                    if(addEntry) await addEntry(newEntry);
                    else setEntries(p=>[...p,newEntry]);
                    setForm({platform:"YouTube",amount:"",note:""});
                    setShowForm(false);
                  }} style={{background:t.acc,color:"#fff",padding:"12px",fontSize:"14px",fontWeight:700,borderRadius:"10px",width:"100%"}}>
                    Log Income →
                  </button>
                );
              })()}
            </div>
          )}
          <div style={{maxHeight:"310px",overflowY:"auto"}}>
            {cur.length===0
              ?<div style={{textAlign:"center",padding:"32px 0",color:t.fnt,fontSize:"14px"}}>No transactions yet</div>
              :[...cur].reverse().map(e=>(
                <div key={e.id} className="hr" style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 8px",borderBottom:`1px solid ${t.fnt}`,borderRadius:"8px",transition:"background .13s"}}>
                  <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
                    <PlatLogo name={e.platform} size={34}/>
                    <div>
                      <div style={{fontSize:"14px",fontWeight:600,color:t.txt}}>{e.platform}</div>
                      {e.note&&<div style={{fontSize:"12px",color:t.mut,marginTop:"2px"}}>{e.note}</div>}
                    </div>
                  </div>
                  <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
                    <span style={{fontFamily:"'Outfit',sans-serif",fontSize:"18px",fontWeight:800,color:t.acc}}>+${e.amount.toLocaleString()}</span>
                    <button className="db btn" onClick={()=>{ if(deleteEntry) deleteEntry(e.id); else setEntries(p=>p.filter(x=>x.id!==e.id)); }} style={{background:"transparent",color:t.dan,fontSize:"20px",lineHeight:1,padding:"2px 6px",borderRadius:"6px"}}>×</button>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}

// ─── YEARLY TAB ───────────────────────────────────────────────────────────────
function YearOverviewTab({entries,dark,userProfile}){
  const t=T(dark);
  const w=useW();
  const availYears=[...new Set(entries.map(e=>e.year))].sort((a,b)=>b-a);
  const [yr,setYr]=useState(availYears[0]||2026);
  const [view,setView]=useState("bar");
  const [selP,setSelP]=useState("ALL");
  const [animIn,setAnimIn]=useState(false);
  useEffect(()=>{setAnimIn(false);setTimeout(()=>setAnimIn(true),40);},[yr]);

  const yE=entries.filter(e=>e.year===yr);
  const pE=entries.filter(e=>e.year===yr-1);
  const total=yE.reduce((s,e)=>s+e.amount,0);
  const prev=pE.reduce((s,e)=>s+e.amount,0);
  const yoy=prev>0?((total-prev)/prev*100).toFixed(1):null;
  const actP=PLATFORMS.filter(p=>yE.some(e=>e.platform===p.name));
  const bestMo=MONTHS.reduce((b,m,i)=>{const tt=yE.filter(e=>e.month===i).reduce((s,e)=>s+e.amount,0);return tt>b.total?{month:i,total:tt}:b;},{month:0,total:0});

  const mData=MONTHS.map((m,i)=>{
    const me=yE.filter(e=>e.month===i);
    const row={month:m,total:me.reduce((s,e)=>s+e.amount,0)};
    actP.forEach(p=>{row[p.name]=me.filter(e=>e.platform===p.name).reduce((s,e)=>s+e.amount,0);});
    return row;
  });

  const sMeta=getPM(selP);
  const pMo=MONTHS.map((m,i)=>({month:m,amount:yE.filter(e=>e.month===i&&(selP==="ALL"||e.platform===selP)).reduce((s,e)=>s+e.amount,0)}));
  const pTot=pMo.reduce((s,r)=>s+r.amount,0);

  const yoyD=MONTHS.map((m,i)=>({
    month:m,
    [yr]:yE.filter(e=>e.month===i).reduce((s,e)=>s+e.amount,0),
    [yr-1]:pE.filter(e=>e.month===i).reduce((s,e)=>s+e.amount,0),
  }));

  const pRank=actP.map(p=>({
    ...p,
    total:yE.filter(e=>e.platform===p.name).reduce((s,e)=>s+e.amount,0),
    monthly:MONTHS.map((m,i)=>({month:m,amount:yE.filter(e=>e.platform===p.name&&e.month===i).reduce((s,e)=>s+e.amount,0)})),
  })).sort((a,b)=>b.total-a.total);
  const maxP=pRank[0]?.total||1;

  const tickStyle={fill:t.mut,fontSize:12};
  const yFmt=v=>`$${(v/1000).toFixed(0)}k`;

  // Real annual tax estimate using user's state & filing status
  const hasProfile=userProfile?.state&&userProfile.state.length>0;
  const taxEst=hasProfile&&total>0
    ?calcTaxes({gross:total,status:userProfile.filingStatus||"single",state:userProfile.state,ded:0})
    :null;
  const effectivePct=taxEst?taxEst.eff.toFixed(1):null;
  const takeHome=taxEst?taxEst.home:total*0.75;
  const taxAside=taxEst?taxEst.allTax:total*0.25;

  return(
    <div>
      {/* Year selector + export */}
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"26px",flexWrap:"wrap",gap:"12px"}}>
        <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
          <span style={{fontSize:"11px",color:t.mut,fontWeight:700,letterSpacing:"1px"}}>YEAR</span>
          <div style={{position:"relative",display:"inline-flex",alignItems:"center"}}>
            <select value={yr} onChange={e=>setYr(Number(e.target.value))} style={{
              appearance:"none",WebkitAppearance:"none",
              background:t.crd,border:`1.5px solid ${t.brd}`,color:t.txt,
              padding:"10px 42px 10px 18px",fontSize:"15px",fontWeight:700,
              borderRadius:"12px",cursor:"pointer",
              fontFamily:"'Plus Jakarta Sans',system-ui,sans-serif",
              boxShadow:"0 2px 10px rgba(0,0,0,0.14)",
              outline:"none",minWidth:"120px",
            }}>
              {availYears.map(y=><option key={y} value={y}>{y}</option>)}
            </select>
            <span style={{position:"absolute",right:"14px",pointerEvents:"none",color:t.mut,fontSize:"13px",fontWeight:700}}>▾</span>
          </div>
        </div>
        <div style={{display:"flex",gap:"8px"}}>
          <button className="btn" onClick={()=>exportCSV(entries,yr)} style={{background:t.inp,border:`1.5px solid ${t.brd}`,color:t.mut,padding:"9px 16px",fontSize:"13px",fontWeight:600,borderRadius:"8px"}}>↓ Export {yr}</button>
          <button className="btn" onClick={()=>exportCSV(entries,null)} style={{background:t.inp,border:`1.5px solid ${t.brd}`,color:t.mut,padding:"9px 16px",fontSize:"13px",fontWeight:600,borderRadius:"8px"}}>↓ All Data</button>
        </div>
      </div>

      {/* ── Hero total earned card ── */}
      <div className={`fi ${animIn?"on":""}`} style={{
        background:`linear-gradient(135deg,${t.acc}22,${t.acc}06)`,
        border:`1.5px solid ${t.acc}55`,
        borderRadius:"16px",padding:w<600?"18px 16px":"28px 36px",marginBottom:"16px",
        transitionDelay:"0.05s",position:"relative",overflow:"hidden",
      }}>
        <div style={{position:"absolute",top:"-50px",right:"-50px",width:"200px",height:"200px",borderRadius:"50%",background:t.acc,opacity:.06,pointerEvents:"none"}}/>
        <div style={{display:"flex",alignItems:w<600?"flex-start":"flex-end",justifyContent:"space-between",flexWrap:"wrap",gap:"16px",flexDirection:w<600?"column":"row"}}>
          <div>
            <div style={{fontSize:"12px",color:t.acc,fontWeight:700,letterSpacing:"1.5px",textTransform:"uppercase",marginBottom:"12px"}}>
              Total Earned — {yr}
            </div>
            <div style={{fontFamily:"'Outfit',sans-serif",fontSize:"clamp(44px,5.5vw,68px)",fontWeight:800,color:t.txt,lineHeight:1,letterSpacing:"-1px"}}>
              {`$${total.toLocaleString()}`}
            </div>
            <div style={{marginTop:"14px",display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap"}}>
              {yoy?(
                <span style={{display:"inline-flex",alignItems:"center",gap:"6px",background:Number(yoy)>0?`${t.acc}22`:`${t.dan}22`,border:`1px solid ${Number(yoy)>0?t.acc:t.dan}44`,padding:"5px 12px",borderRadius:"8px",fontSize:"14px",fontWeight:700,color:Number(yoy)>0?t.acc:t.dan}}>
                  {Number(yoy)>0?"▲":"▼"} {Math.abs(Number(yoy))}% vs {yr-1}
                </span>
              ):(
                <span style={{fontSize:"13px",color:t.mut}}>First year on record</span>
              )}
            </div>
          </div>
          <div style={{textAlign:"right",background:`${t.acc}14`,border:`1px solid ${t.acc}33`,padding:"16px 22px",borderRadius:"14px",minWidth:"180px"}}>
            <div style={{fontSize:"11px",color:t.acc,fontWeight:700,letterSpacing:"1.2px",textTransform:"uppercase",marginBottom:"8px"}}>🏦 Est. Take Home</div>
            <div style={{fontFamily:"'Outfit',sans-serif",fontSize:"34px",fontWeight:800,color:t.txt,lineHeight:1}}>
              {`$${Math.round(takeHome).toLocaleString()}`}
            </div>
            <div style={{fontSize:"12px",color:t.mut,marginTop:"6px"}}>
              {taxEst?`After ${effectivePct}% tax · ${userProfile.state}`:"~75% est. — add state in Tax tab"}
            </div>
          </div>
        </div>
      </div>

      {/* ── Supporting stats ── */}
      <div style={{display:"grid",gridTemplateColumns:w<600?"1fr":"repeat(3,1fr)",gap:"12px",marginBottom:"16px"}}>
        <StatCard label="Best Month" value={MONTHS[bestMo.month]} sub={`$${bestMo.total.toLocaleString()} earned`} subColor={t.acc} delay="0.18s" t={t} animIn={animIn} icon="🏆" topColor="#ffd426"/>
        <StatCard
          label="Tax Set Aside"
          value={`$${Math.round(taxAside).toLocaleString()}`}
          sub={taxEst?`${effectivePct}% effective · ${userProfile.state}`:"Set state in Tax tab for exact figure"}
          subColor={t.wrn}
          delay="0.24s" t={t} animIn={animIn} icon="📋" topColor={t.wrn}
        />
        <StatCard label="Active Platforms" value={actP.length} sub={`Across ${yE.length} transactions`} delay="0.30s" t={t} animIn={animIn} icon="📡" topColor="#ff6b9d"/>
      </div>

      {/* Main chart */}
      <div className={`fi ${animIn?"on":""}`} style={{background:t.crd,border:`1.5px solid ${t.cbrd}`,borderRadius:"16px",padding:"26px",marginBottom:"18px",transitionDelay:"0.3s"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px",flexWrap:"wrap",gap:"10px"}}>
          <div>
            <div style={{fontSize:"11px",color:t.mut,fontWeight:700,letterSpacing:"1px",textTransform:"uppercase",marginBottom:"4px"}}>Monthly Income — {yr}</div>
            <div style={{fontFamily:"'Outfit',sans-serif",fontSize:"26px",fontWeight:800,color:t.txt}}>${total.toLocaleString()} <span style={{fontSize:"15px",fontWeight:500,color:t.mut}}>total</span></div>
          </div>
          <div style={{display:"flex",gap:"6px"}}>
            {[["area","Area"],["bar","Bar"],["stacked","Stacked"]].map(([v,l])=>(
              <button key={v} className="btn" onClick={()=>setView(v)} style={{padding:"8px 16px",fontSize:"13px",fontWeight:600,background:view===v?t.acc:"transparent",color:view===v?"#fff":t.mut,border:`1.5px solid ${view===v?t.acc:t.brd}`,borderRadius:"8px"}}>
                {l}
              </button>
            ))}
          </div>
        </div>
        <ResponsiveContainer width="100%" height={230}>
          {view==="area"?(
            <AreaChart data={mData} margin={{top:6,right:10,left:0,bottom:4}}>
              <defs><linearGradient id="tgr" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor={t.acc} stopOpacity={.28}/><stop offset="95%" stopColor={t.acc} stopOpacity={0}/></linearGradient></defs>
              <XAxis dataKey="month" tick={tickStyle} axisLine={false} tickLine={false}/>
              <YAxis tick={tickStyle} axisLine={false} tickLine={false} tickFormatter={yFmt}/>
              <Tooltip content={p=><CTip {...p} dark={dark}/>}/>
              <Area type="monotone" dataKey="total" name="Total" stroke={t.acc} strokeWidth={3} fill="url(#tgr)" dot={false} activeDot={{r:6,fill:t.acc,strokeWidth:0}}/>
            </AreaChart>
          ):view==="bar"?(
            <BarChart data={mData} margin={{top:6,right:10,left:0,bottom:4}}>
              <XAxis dataKey="month" tick={tickStyle} axisLine={false} tickLine={false}/>
              <YAxis tick={tickStyle} axisLine={false} tickLine={false} tickFormatter={yFmt}/>
              <Tooltip content={p=><CTip {...p} dark={dark}/>}/>
              <Bar dataKey="total" name="Total" fill={t.acc} radius={[6,6,0,0]} opacity={.85}/>
            </BarChart>
          ):(
            <BarChart data={mData} margin={{top:6,right:10,left:0,bottom:4}}>
              <XAxis dataKey="month" tick={tickStyle} axisLine={false} tickLine={false}/>
              <YAxis tick={tickStyle} axisLine={false} tickLine={false} tickFormatter={yFmt}/>
              <Tooltip content={p=><CTip {...p} dark={dark}/>}/>
              {actP.map(p=><Bar key={p.name} dataKey={p.name} name={p.name} stackId="a" fill={p.color} opacity={.85}/>)}
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>

      {/* Platform dropdown chart */}
      <div className={`fi ${animIn?"on":""}`} style={{background:t.crd,border:`1.5px solid ${t.cbrd}`,borderRadius:"16px",padding:"26px",marginBottom:"18px",transitionDelay:"0.38s"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"18px",flexWrap:"wrap",gap:"12px"}}>
          <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
            {selP!=="ALL"&&<PlatLogo name={selP} size={36}/>}
            <div>
              <div style={{fontSize:"11px",color:t.mut,fontWeight:700,letterSpacing:"1px",textTransform:"uppercase",marginBottom:"3px"}}>Platform Breakdown</div>
              <div style={{fontFamily:"'Outfit',sans-serif",fontSize:"20px",fontWeight:800,color:selP==="ALL"?t.txt:sMeta.color}}>
                {selP==="ALL"?"All Platforms":selP} — ${pTot.toLocaleString()}
              </div>
            </div>
          </div>
          <select value={selP} onChange={e=>setSelP(e.target.value)} style={{background:t.inp,border:`1.5px solid ${t.brd}`,color:t.txt,padding:"10px 16px",fontSize:"14px",borderRadius:"10px",cursor:"pointer",fontFamily:"'Plus Jakarta Sans',system-ui,sans-serif",fontWeight:600}}>
            <option value="ALL">All Platforms</option>
            {actP.map(p=><option key={p.name} value={p.name}>{p.name}</option>)}
          </select>
        </div>
        <ResponsiveContainer width="100%" height={190}>
          <AreaChart data={pMo} margin={{top:6,right:10,left:0,bottom:4}}>
            <defs>
              <linearGradient id="pgr" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={selP==="ALL"?t.acc:sMeta.color} stopOpacity={.28}/>
                <stop offset="95%" stopColor={selP==="ALL"?t.acc:sMeta.color} stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="month" tick={tickStyle} axisLine={false} tickLine={false}/>
            <YAxis tick={tickStyle} axisLine={false} tickLine={false} tickFormatter={v=>`$${(v/1000).toFixed(1)}k`}/>
            <Tooltip content={p=><CTip {...p} dark={dark}/>}/>
            <Area type="monotone" dataKey="amount" name={selP==="ALL"?"All Platforms":selP} stroke={selP==="ALL"?t.acc:sMeta.color} strokeWidth={3} fill="url(#pgr)" dot={false} activeDot={{r:6}}/>
          </AreaChart>
        </ResponsiveContainer>
        <div style={{marginTop:"16px",display:"grid",gridTemplateColumns:"repeat(6,1fr)",gap:"8px"}}>
          {pMo.map(r=>{
            const hasVal=r.amount>0;
            const col=selP==="ALL"?t.acc:sMeta.color;
            return(
              <div key={r.month} style={{background:t.inp,border:`1.5px solid ${hasVal?col+"44":t.brd}`,padding:"10px 6px",borderRadius:"10px",textAlign:"center"}}>
                <div style={{fontSize:"11px",color:t.mut,fontWeight:600,marginBottom:"4px"}}>{r.month}</div>
                <div style={{fontFamily:"'Outfit',sans-serif",fontSize:"14px",fontWeight:800,color:hasVal?col:t.fnt}}>{hasVal?`$${r.amount.toLocaleString()}`:"—"}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* YoY */}
      {prev>0&&(
        <div className={`fi ${animIn?"on":""}`} style={{background:t.crd,border:`1.5px solid ${t.cbrd}`,borderRadius:"16px",padding:"26px",marginBottom:"18px",transitionDelay:"0.45s"}}>
          <div style={{fontSize:"11px",color:t.mut,fontWeight:700,letterSpacing:"1px",textTransform:"uppercase",marginBottom:"18px"}}>Year-over-Year — {yr} vs {yr-1}</div>
          <ResponsiveContainer width="100%" height={170}>
            <LineChart data={yoyD} margin={{top:6,right:10,left:0,bottom:4}}>
              <XAxis dataKey="month" tick={tickStyle} axisLine={false} tickLine={false}/>
              <YAxis tick={tickStyle} axisLine={false} tickLine={false} tickFormatter={yFmt}/>
              <Tooltip content={p=><CTip {...p} dark={dark}/>}/>
              <Line type="monotone" dataKey={yr} name={String(yr)} stroke={t.acc} strokeWidth={3} dot={false} activeDot={{r:6,fill:t.acc,strokeWidth:0}}/>
              <Line type="monotone" dataKey={yr-1} name={String(yr-1)} stroke={t.fnt} strokeWidth={2} strokeDasharray="5 5" dot={false}/>
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* Ranked list */}
      <div className={`fi ${animIn?"on":""}`} style={{background:t.crd,border:`1.5px solid ${t.cbrd}`,borderRadius:"16px",padding:"26px",marginBottom:"18px",transitionDelay:"0.5s"}}>
        <div style={{fontSize:"11px",color:t.mut,fontWeight:700,letterSpacing:"1px",textTransform:"uppercase",marginBottom:"18px"}}>All Platforms Ranked</div>
        {pRank.map((p,i)=>(
          <div key={p.name} className="pl-row" style={{display:"flex",alignItems:"center",gap:"14px",padding:"12px 10px",marginBottom:"4px"}}>
            <PlatLogo name={p.name} size={38}/>
            <div style={{flex:1}}>
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:"7px"}}>
                <span style={{fontSize:"15px",fontWeight:700,color:t.txt}}>{p.name}</span>
                <span style={{fontFamily:"'Outfit',sans-serif",fontSize:"17px",fontWeight:800,color:p.color}}>${p.total.toLocaleString()}</span>
              </div>
              <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
                <div style={{flex:1,height:"7px",background:t.fnt,borderRadius:"4px",overflow:"hidden"}}>
                  <div className="bf" style={{height:"100%",width:animIn?`${(p.total/maxP)*100}%`:"0%",background:`linear-gradient(90deg,${p.color},${p.color}99)`,borderRadius:"4px",transitionDelay:`${.55+i*.06}s`,boxShadow:`0 0 8px ${p.glow}`}}/>
                </div>
                <span style={{fontSize:"12px",color:t.mut,fontWeight:600,width:"36px",textAlign:"right"}}>{((p.total/total)*100).toFixed(0)}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mini platform charts */}
      <div style={{display:"grid",gridTemplateColumns:w<700?"1fr":"1fr 1fr",gap:"14px"}}>
        {pRank.map((p,idx)=>(
          <div key={p.name} className={`fi card ${animIn?"on":""}`} style={{background:t.crd,border:`1.5px solid ${t.cbrd}`,borderRadius:"16px",padding:"20px",transitionDelay:`${.58+idx*.05}s`,position:"relative",overflow:"hidden"}}>
            <div style={{position:"absolute",top:0,left:0,right:0,height:"3px",background:`linear-gradient(90deg,${p.color},${p.color}00)`}}/>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"14px"}}>
              <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
                <PlatLogo name={p.name} size={38}/>
                <div>
                  <div style={{fontSize:"14px",fontWeight:700,color:t.txt}}>{p.name}</div>
                  <div style={{fontFamily:"'Outfit',sans-serif",fontSize:"22px",fontWeight:800,color:p.color}}>${p.total.toLocaleString()}</div>
                </div>
              </div>
              <div style={{textAlign:"right",background:t.inp,padding:"8px 12px",borderRadius:"10px"}}>
                <div style={{fontSize:"11px",color:t.mut,fontWeight:600}}>AVG/MO</div>
                <div style={{fontFamily:"'Outfit',sans-serif",fontSize:"16px",fontWeight:800,color:p.color}}>${Math.round(p.total/12).toLocaleString()}</div>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={75}>
              <AreaChart data={p.monthly} margin={{top:2,right:2,left:-28,bottom:2}}>
                <defs><linearGradient id={`g${p.name.replace(/[^a-z]/gi,"")}`} x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor={p.color} stopOpacity={.28}/><stop offset="95%" stopColor={p.color} stopOpacity={0}/></linearGradient></defs>
                <XAxis dataKey="month" tick={{fill:t.mut,fontSize:10}} axisLine={false} tickLine={false}/>
                <YAxis hide/>
                <Tooltip content={pp=><CTip {...pp} dark={dark}/>}/>
                <Area type="monotone" dataKey="amount" name={p.name} stroke={p.color} strokeWidth={2} fill={`url(#g${p.name.replace(/[^a-z]/gi,"")})`} dot={false} activeDot={{r:4,fill:p.color,strokeWidth:0}}/>
              </AreaChart>
            </ResponsiveContainer>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── TAX TAB ──────────────────────────────────────────────────────────────────
function TaxTab({entries,dark,userProfile,onUpdateProfile,expenseDeductions=0,expenseDedCount=0}){
  const t=T(dark);
  const w=useW();
  const CY=2026;
  const yInc=entries.filter(e=>e.year===CY).reduce((s,e)=>s+e.amount,0);

  // ── All state ─────────────────────────────────────────────────────────────
  const [income,setIncome]=useState(String(Math.round(yInc))||"");
  const [ded,setDed]=useState("");
  const [animIn,setAnimIn]=useState(false);
  const [editProf,setEditProf]=useState(false);
  const [draftState,setDraftState]=useState(userProfile.state);
  const [draftFiling,setDraftFiling]=useState(userProfile.filingStatus);

  // Auto-fill income from tracked entries
  useEffect(()=>{if(yInc>0)setIncome(String(Math.round(yInc)));},[yInc]);
  // Auto-fill deductions from expenses
  useEffect(()=>{if(expenseDeductions>0)setDed(String(expenseDeductions));},[expenseDeductions]);
  // Animate in when profile is set
  useEffect(()=>{if(userProfile.state)setTimeout(()=>setAnimIn(true),100);},[userProfile.state]);

  function saveProf(){
    onUpdateProfile({state:draftState,filingStatus:draftFiling});
    setEditProf(false);
    setAnimIn(false);
    setTimeout(()=>setAnimIn(true),100);
  }

  // ── Live calculation — runs on every keystroke ────────────────────────────
  const g=Math.max(0,parseFloat(String(income).replace(/[^0-9.]/g,""))||0);
  const d=Math.max(0,parseFloat(String(ded).replace(/[^0-9.]/g,""))||0);
  const res=(g>0&&userProfile.state)
    ?{...calcTaxes({gross:g,status:userProfile.filingStatus,state:userProfile.state,ded:d}),gross:g}
    :null;

  // ── Donut ─────────────────────────────────────────────────────────────────
  const donutR=78, donutC=2*Math.PI*donutR;
  const segs=res?[
    {label:"Federal Tax",  val:res.fed,   color:t.dan},
    {label:"Self-Emp Tax", val:res.se,    color:t.wrn},
    {label:"State Tax",    val:res.stTax, color:"#a259ff"},
    {label:"Take Home",    val:res.home,  color:t.acc},
  ]:[];
  let cumLen=0;
  const dSegs=segs.map(s=>{
    const frac=res&&res.gross>0?Math.max(0,s.val/res.gross):0;
    const segLen=frac*donutC;
    const startPos=cumLen;
    cumLen+=segLen;
    return{...s,frac,segLen,dashOffset:donutC-startPos};
  });

  const inp={background:t.inp,border:`1.5px solid ${t.brd}`,color:t.txt,padding:"12px 16px",fontSize:"14px",borderRadius:"10px",fontFamily:"'Plus Jakarta Sans',system-ui,sans-serif",width:"100%"};

  return(
    <div style={{maxWidth:"960px"}}>
      <div style={{marginBottom:"24px"}}>
        <div style={{fontFamily:"'Outfit',sans-serif",fontSize:"34px",fontWeight:800,color:t.txt,marginBottom:"8px"}}>Tax Estimator</div>
        <p style={{fontSize:"15px",color:t.mut,lineHeight:1.7}}>Real self-employment tax — updates live as you type. Federal, state, and SE tax calculated for your exact situation.</p>
        <div style={{marginTop:"12px",padding:"12px 16px",background:t.warnBg,border:`1.5px solid ${t.wrn}44`,borderRadius:"10px",fontSize:"13px",color:t.wrn,lineHeight:1.6,fontWeight:500}}>
          ⚠ Estimate for planning only — not professional tax advice. Consult a CPA for your actual filing.
        </div>
      </div>

      {/* Profile card */}
      <div style={{background:t.crd,border:`1.5px solid ${editProf?t.acc:t.cbrd}`,borderRadius:"16px",padding:"20px 24px",marginBottom:"20px",transition:"border-color .2s"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:editProf?"18px":"0"}}>
          <div style={{display:"flex",alignItems:"center",gap:"14px"}}>
            <div style={{width:"46px",height:"46px",borderRadius:"12px",background:`linear-gradient(135deg,${t.acc},#7b8cff)`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"22px",flexShrink:0}}>📍</div>
            <div>
              <div style={{fontSize:"11px",color:t.mut,fontWeight:700,letterSpacing:"1px",textTransform:"uppercase",marginBottom:"6px"}}>Tax Profile</div>
              {!editProf&&(
                <div style={{display:"flex",gap:"8px",flexWrap:"wrap"}}>
                  <span style={{fontSize:"14px",fontWeight:600,color:t.txt,background:t.inp,border:`1.5px solid ${t.brd}`,padding:"5px 12px",borderRadius:"8px"}}>📍 {userProfile.state||"No state set"}</span>
                  <span style={{fontSize:"14px",fontWeight:600,color:t.txt,background:t.inp,border:`1.5px solid ${t.brd}`,padding:"5px 12px",borderRadius:"8px"}}>{FILING[userProfile.filingStatus]}</span>
                  {userProfile.state&&STATE_TAXES[userProfile.state]===0&&(
                    <span style={{fontSize:"14px",fontWeight:600,color:t.acc,background:`${t.acc}18`,border:`1.5px solid ${t.acc}44`,padding:"5px 12px",borderRadius:"8px"}}>✓ No state tax</span>
                  )}
                </div>
              )}
            </div>
          </div>
          <button className="btn" onClick={()=>{setEditProf(v=>!v);setDraftState(userProfile.state);setDraftFiling(userProfile.filingStatus);}} style={{background:t.inp,border:`1.5px solid ${t.brd}`,color:t.txt,padding:"10px 20px",fontSize:"13px",fontWeight:600,borderRadius:"10px",flexShrink:0}}>
            {editProf?"Cancel":"✎ Edit Profile"}
          </button>
        </div>
        {editProf&&(
          <div style={{display:"grid",gridTemplateColumns:w<600?"1fr":"1fr 1fr",gap:"16px"}}>
            <div>
              <div style={{fontSize:"11px",color:t.mut,fontWeight:700,textTransform:"uppercase",marginBottom:"8px"}}>State</div>
              <StatePicker value={draftState} onChange={setDraftState} t={t}/>
              {draftState&&STATE_TAXES[draftState]===0&&<div style={{marginTop:"6px",fontSize:"12px",color:t.acc,fontWeight:600}}>✓ {draftState} has no state income tax</div>}
            </div>
            <div>
              <div style={{fontSize:"11px",color:t.mut,fontWeight:700,textTransform:"uppercase",marginBottom:"8px"}}>Filing Status</div>
              <div style={{display:"flex",gap:"6px"}}>
                {Object.entries(FILING).map(([k,v])=>(
                  <button key={k} className="btn" onClick={()=>setDraftFiling(k)} style={{flex:1,padding:"10px 6px",fontSize:"12px",fontWeight:700,background:draftFiling===k?t.acc:t.inp,color:draftFiling===k?"#fff":t.mut,border:`1.5px solid ${draftFiling===k?t.acc:t.brd}`,borderRadius:"9px",textAlign:"center"}}>
                    {v==="Married Filing Jointly"?"Married":v}
                  </button>
                ))}
              </div>
            </div>
            <div style={{gridColumn:"1/-1"}}>
              <button className="btn" onClick={saveProf} disabled={!draftState} style={{background:draftState?t.acc:"#444",color:"#fff",padding:"12px 28px",fontSize:"14px",fontWeight:700,borderRadius:"10px"}}>Save Profile ✓</button>
            </div>
          </div>
        )}
      </div>

      {!userProfile.state?(
        <div style={{textAlign:"center",padding:"60px 32px",background:t.crd,border:`1.5px solid ${t.cbrd}`,borderRadius:"16px"}}>
          <div style={{fontSize:"52px",marginBottom:"16px"}}>📍</div>
          <div style={{fontFamily:"'Outfit',sans-serif",fontSize:"22px",fontWeight:800,color:t.txt,marginBottom:"10px"}}>Set up your tax profile first</div>
          <p style={{fontSize:"15px",color:t.mut,marginBottom:"24px",maxWidth:"400px",margin:"0 auto 24px"}}>Click "Edit Profile" above to add your state and filing status.</p>
          <button className="btn" onClick={()=>setEditProf(true)} style={{background:t.acc,color:"#fff",padding:"14px 32px",fontSize:"15px",fontWeight:700,borderRadius:"12px"}}>Set Up Profile →</button>
        </div>
      ):(
        <div>
          {/* ── Input row ── */}
          <div style={{display:"grid",gridTemplateColumns:w<700?"1fr":"1fr 1fr",gap:"16px",marginBottom:"20px"}}>
            {/* Income input */}
            <div style={{background:t.crd,border:`1.5px solid ${t.cbrd}`,borderRadius:"16px",padding:"20px 24px"}}>
              <div style={{fontSize:"11px",color:t.mut,fontWeight:700,textTransform:"uppercase",letterSpacing:"1px",marginBottom:"10px"}}>Annual Gross Income</div>
              <div style={{position:"relative"}}>
                <span style={{position:"absolute",left:"16px",top:"50%",transform:"translateY(-50%)",color:t.mut,fontSize:"22px",fontWeight:700}}>$</span>
                <input value={income} onChange={e=>setIncome(e.target.value)} placeholder="0" type="number"
                  style={{...inp,paddingLeft:"40px",fontSize:"22px",fontWeight:800,border:`1.5px solid ${t.acc}55`}}/>
              </div>
              {yInc>0&&(
                <div style={{marginTop:"10px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                  <span style={{fontSize:"12px",color:t.mut}}>Tracked {CY} income</span>
                  <button className="btn" onClick={()=>setIncome(String(Math.round(yInc)))} style={{fontSize:"12px",fontWeight:700,color:t.acc,background:`${t.acc}14`,border:`1px solid ${t.acc}44`,padding:"4px 12px",borderRadius:"6px"}}>
                    Use ${Math.round(yInc).toLocaleString()} ↑
                  </button>
                </div>
              )}
            </div>

            {/* Deductions input */}
            <div style={{background:t.crd,border:`1.5px solid ${t.cbrd}`,borderRadius:"16px",padding:"20px 24px"}}>
              <div style={{fontSize:"11px",color:t.mut,fontWeight:700,textTransform:"uppercase",letterSpacing:"1px",marginBottom:"10px"}}>
                Business Deductions <span style={{color:t.fnt,fontWeight:400,fontSize:"10px"}}>(optional)</span>
              </div>
              {expenseDeductions>0&&(
                <div style={{marginBottom:"10px",padding:"10px 14px",background:`${t.acc}14`,border:`1.5px solid ${t.acc}44`,borderRadius:"10px",display:"flex",alignItems:"center",justifyContent:"space-between",cursor:"pointer"}} onClick={()=>setDed(String(expenseDeductions))}>
                  <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
                    <span style={{fontSize:"15px"}}>🧾</span>
                    <div>
                      <div style={{fontSize:"12px",fontWeight:700,color:t.txt}}>From Expenses & Fees</div>
                      <div style={{fontSize:"11px",color:t.mut}}>{expenseDedCount} deductible item{expenseDedCount!==1?"s":""}</div>
                    </div>
                  </div>
                  <div style={{fontFamily:"'Outfit',sans-serif",fontSize:"18px",fontWeight:800,color:t.acc}}>${expenseDeductions.toLocaleString()}</div>
                </div>
              )}
              <div style={{position:"relative"}}>
                <span style={{position:"absolute",left:"16px",top:"50%",transform:"translateY(-50%)",color:t.mut,fontSize:"22px",fontWeight:700}}>$</span>
                <input value={ded} onChange={e=>setDed(e.target.value)} placeholder="0" type="number"
                  style={{...inp,paddingLeft:"40px",fontSize:"22px",fontWeight:800}}/>
              </div>
              <div style={{marginTop:"8px",fontSize:"12px",color:t.mut}}>Equipment, software, home office, internet…</div>
            </div>
          </div>

          {/* ── Live results ── */}
          {!res&&(
            <div style={{textAlign:"center",padding:"40px",background:t.crd,border:`1.5px solid ${t.cbrd}`,borderRadius:"16px",color:t.mut}}>
              <div style={{fontSize:"32px",marginBottom:"12px"}}>🧮</div>
              <div style={{fontSize:"16px",fontWeight:600,color:t.txt,marginBottom:"6px"}}>Enter your income above</div>
              <div style={{fontSize:"14px"}}>Results update live as you type — no button needed</div>
            </div>
          )}

          {res&&(
            <>
              {/* Summary label */}
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"16px",flexWrap:"wrap",gap:"8px"}}>
                <div style={{fontSize:"13px",color:t.mut,fontWeight:500}}>
                  Live estimate for <strong style={{color:t.txt}}>{FILING[userProfile.filingStatus]}</strong> in <strong style={{color:t.txt}}>{userProfile.state}</strong>
                </div>
                <div style={{display:"flex",alignItems:"center",gap:"6px",background:`${t.acc}14`,border:`1px solid ${t.acc}44`,padding:"4px 12px",borderRadius:"6px"}}>
                  <div className="ld" style={{width:"6px",height:"6px",borderRadius:"50%",background:t.acc}}/>
                  <span style={{fontSize:"12px",color:t.acc,fontWeight:700}}>Live</span>
                </div>
              </div>

              {/* ── Hero result: Take Home + Total Tax side by side ── */}
              <div style={{display:"grid",gridTemplateColumns:w<600?"1fr":"1fr 1fr",gap:"14px",marginBottom:"14px"}}>
                {/* Take Home — hero green card */}
                <div className={`fi ${animIn?"on":""}`} style={{background:`linear-gradient(135deg,${t.acc}22,${t.acc}06)`,border:`1.5px solid ${t.acc}55`,borderRadius:"20px",padding:"24px 28px",transitionDelay:"0.05s",position:"relative",overflow:"hidden"}}>
                  <div style={{position:"absolute",top:"-30px",right:"-30px",width:"120px",height:"120px",borderRadius:"50%",background:t.acc,opacity:.07,pointerEvents:"none"}}/>
                  <div style={{fontSize:"11px",color:t.acc,fontWeight:700,letterSpacing:"1.5px",textTransform:"uppercase",marginBottom:"10px"}}>✅ Est. Take Home</div>
                  <div style={{fontFamily:"'Outfit',sans-serif",fontSize:"clamp(32px,4vw,48px)",fontWeight:800,color:t.txt,lineHeight:1,marginBottom:"8px"}}>${Math.round(res.home).toLocaleString()}</div>
                  <div style={{fontSize:"13px",color:t.mut}}>After all federal, state & SE taxes</div>
                  <div style={{marginTop:"12px",display:"inline-flex",alignItems:"center",gap:"6px",background:`${t.acc}20`,border:`1px solid ${t.acc}44`,padding:"4px 12px",borderRadius:"6px"}}>
                    <span style={{fontSize:"13px",fontWeight:700,color:t.acc}}>{res.eff.toFixed(1)}% effective tax rate</span>
                  </div>
                </div>
                {/* Total Tax */}
                <div className={`fi ${animIn?"on":""}`} style={{background:`${t.dan}0e`,border:`1.5px solid ${t.dan}44`,borderRadius:"20px",padding:"24px 28px",transitionDelay:"0.1s",position:"relative",overflow:"hidden"}}>
                  <div style={{position:"absolute",top:"-30px",right:"-30px",width:"120px",height:"120px",borderRadius:"50%",background:t.dan,opacity:.06,pointerEvents:"none"}}/>
                  <div style={{fontSize:"11px",color:t.dan,fontWeight:700,letterSpacing:"1.5px",textTransform:"uppercase",marginBottom:"10px"}}>⚠️ Total Tax Due</div>
                  <div style={{fontFamily:"'Outfit',sans-serif",fontSize:"clamp(32px,4vw,48px)",fontWeight:800,color:t.txt,lineHeight:1,marginBottom:"8px"}}>${Math.round(res.allTax).toLocaleString()}</div>
                  <div style={{fontSize:"13px",color:t.mut}}>Federal + SE + {userProfile.state} state tax</div>
                  <div style={{marginTop:"12px",display:"inline-flex",alignItems:"center",gap:"6px",background:`${t.dan}18`,border:`1px solid ${t.dan}44`,padding:"4px 12px",borderRadius:"6px"}}>
                    <span style={{fontSize:"13px",fontWeight:700,color:t.dan}}>Set aside ${Math.round(res.allTax).toLocaleString()}</span>
                  </div>
                </div>
              </div>
              {/* ── Supporting stats ── */}
              <div style={{display:"grid",gridTemplateColumns:w<600?"1fr 1fr":"1fr 1fr",gap:"12px",marginBottom:"20px"}}>
                <div className={`fi ${animIn?"on":""}`} style={{background:t.crd,border:`1.5px solid ${t.wrn}44`,borderRadius:"14px",padding:"16px 20px",transitionDelay:"0.15s",display:"flex",alignItems:"center",gap:"14px"}}>
                  <div style={{width:"42px",height:"42px",borderRadius:"12px",background:`${t.wrn}20`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"20px",flexShrink:0}}>🏦</div>
                  <div>
                    <div style={{fontSize:"11px",color:t.mut,fontWeight:700,letterSpacing:"1px",textTransform:"uppercase",marginBottom:"3px"}}>Set Aside Now</div>
                    <div style={{fontFamily:"'Outfit',sans-serif",fontSize:"22px",fontWeight:800,color:t.wrn}}>${Math.round(res.allTax).toLocaleString()}</div>
                    <div style={{fontSize:"11px",color:t.mut}}>Recommended reserve</div>
                  </div>
                </div>
                <div className={`fi ${animIn?"on":""}`} style={{background:t.crd,border:`1.5px solid #a259ff44`,borderRadius:"14px",padding:"16px 20px",transitionDelay:"0.2s",display:"flex",alignItems:"center",gap:"14px"}}>
                  <div style={{width:"42px",height:"42px",borderRadius:"12px",background:"#a259ff20",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"20px",flexShrink:0}}>📅</div>
                  <div>
                    <div style={{fontSize:"11px",color:t.mut,fontWeight:700,letterSpacing:"1px",textTransform:"uppercase",marginBottom:"3px"}}>Per Quarter</div>
                    <div style={{fontFamily:"'Outfit',sans-serif",fontSize:"22px",fontWeight:800,color:"#a259ff"}}>${Math.round(res.qtr).toLocaleString()}</div>
                    <div style={{fontSize:"11px",color:t.mut}}>Estimated payment</div>
                  </div>
                </div>
              </div>

              {/* Donut + breakdown */}
              <div style={{display:"grid",gridTemplateColumns:w<700?"1fr":"220px 1fr",gap:"16px",marginBottom:"16px"}}>
                {/* Donut */}
                <div className={`fi ${animIn?"on":""}`} style={{background:t.crd,border:`1.5px solid ${t.cbrd}`,borderRadius:"16px",padding:"22px",transitionDelay:"0.3s"}}>
                  <div style={{fontSize:"11px",color:t.mut,fontWeight:700,letterSpacing:"1px",textTransform:"uppercase",marginBottom:"14px"}}>Breakdown</div>
                  <svg width="176" height="176" viewBox="0 0 176 176" style={{display:"block",margin:"0 auto"}}>
                    <circle cx="88" cy="88" r={donutR} fill="none" stroke={t.fnt} strokeWidth="22"/>
                    {[...dSegs].reverse().map((s,ri)=>{
                      const i=dSegs.length-1-ri;
                      const visibleLen=s.segLen; // always show — live update
                      const gap=donutC-visibleLen;
                      return(
                        <circle key={s.label} cx="88" cy="88" r={donutR} fill="none"
                          stroke={s.color} strokeWidth="22"
                          strokeDasharray={`${visibleLen} ${gap}`}
                          strokeDashoffset={s.dashOffset}
                          style={{transform:"rotate(-90deg)",transformOrigin:"88px 88px",transition:`stroke-dasharray 0.75s cubic-bezier(.23,1,.32,1) ${.3+i*.18}s`}}/>
                      );
                    })}
                    <text x="88" y="82" textAnchor="middle" style={{fontFamily:"'Outfit',sans-serif",fontSize:"24px",fontWeight:800,fill:t.txt}}>{res.eff.toFixed(0)}%</text>
                    <text x="88" y="100" textAnchor="middle" style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"11px",fill:t.mut}}>effective</text>
                  </svg>
                  <div style={{marginTop:"14px"}}>
                    {dSegs.map(s=>(
                      <div key={s.label} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"7px 0",borderBottom:`1px solid ${t.fnt}`}}>
                        <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
                          <div style={{width:"10px",height:"10px",borderRadius:"3px",background:s.color,flexShrink:0}}/>
                          <span style={{fontSize:"12px",color:t.mut,fontWeight:500}}>{s.label}</span>
                        </div>
                        <span style={{fontSize:"14px",fontWeight:700,color:s.color}}>${Math.round(s.val).toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Detailed breakdown */}
                <div className={`fi ${animIn?"on":""}`} style={{background:t.crd,border:`1.5px solid ${t.cbrd}`,borderRadius:"16px",padding:"22px",transitionDelay:"0.35s"}}>
                  <div style={{fontSize:"11px",color:t.mut,fontWeight:700,letterSpacing:"1px",textTransform:"uppercase",marginBottom:"14px"}}>Detailed Calculation</div>
                  {[
                    {label:"Gross Income",                                           val:res.gross,   style:"normal",indent:0},
                    {label:"Standard Deduction",                                     val:-res.std,    style:"deduct",indent:1},
                    {label:"½ SE Tax Deduction",                                     val:-res.seDed,  style:"deduct",indent:1},
                    {label:`Extra Deductions${d>0&&d===expenseDeductions?" (from Expenses tab)":""}`,val:-d,style:"deduct",indent:1},
                    {label:"Federal Taxable",                                         val:res.fedInc,  style:"sub",   indent:0},
                    {label:"Federal Income Tax",                                      val:res.fed,     style:"tax",   indent:1},
                    {label:"Self-Employment (15.3%)",                                 val:res.se,      style:"tax",   indent:1},
                    {label:`${userProfile.state} State (${STATE_TAXES[userProfile.state]}% top marginal)`,val:res.stTax,style:"tax",indent:1},
                    {label:"TOTAL TAX",                                               val:res.allTax,  style:"grand", indent:0},
                    {label:"TAKE HOME",                                               val:res.home,    style:"home",  indent:0},
                  ].filter(r=>r.style!=="deduct"||Math.abs(r.val)>0).map(row=>(
                    <div key={row.label} className="bdr" style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"9px 12px",marginLeft:`${row.indent*16}px`,borderRadius:"8px",background:row.style==="grand"?t.grandBg:row.style==="home"?t.homeBg:"transparent",marginBottom:"2px"}}>
                      <span style={{fontSize:"14px",fontWeight:row.style==="grand"||row.style==="home"?700:500,color:row.style==="grand"?t.dan:row.style==="home"?t.acc:row.style==="sub"?t.txt:t.mut}}>
                        {row.indent>0?"  · ":""}{row.label}
                      </span>
                      <span style={{fontSize:"15px",fontWeight:700,color:row.style==="home"?t.acc:row.style==="grand"?t.dan:row.val<0?t.acc:t.txt}}>
                        {row.val<0?`-$${Math.round(Math.abs(row.val)).toLocaleString()}`:`$${Math.round(row.val).toLocaleString()}`}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quarterly payments */}
              <div className={`fi ${animIn?"on":""}`} style={{background:t.crd,border:`1.5px solid ${t.cbrd}`,borderRadius:"16px",padding:"22px",marginBottom:"16px",transitionDelay:"0.5s"}}>
                <div style={{fontSize:"11px",color:t.mut,fontWeight:700,letterSpacing:"1px",textTransform:"uppercase",marginBottom:"16px"}}>2025 Quarterly Estimated Payments</div>
                <div style={{display:"grid",gridTemplateColumns:w<600?"1fr 1fr":"repeat(4,1fr)",gap:"12px"}}>
                  {QDATES.map(q=>(
                    <div key={q.q} style={{background:t.inp,border:`1.5px solid ${t.brd}`,borderRadius:"12px",padding:"16px 14px",textAlign:"center"}}>
                      <div style={{fontSize:"11px",color:t.mut,fontWeight:700,letterSpacing:"1px",marginBottom:"6px"}}>{q.q}</div>
                      <div style={{fontFamily:"'Outfit',sans-serif",fontSize:"22px",fontWeight:800,color:"#a259ff",marginBottom:"6px"}}>${Math.round(res.qtr).toLocaleString()}</div>
                      <div style={{fontSize:"13px",fontWeight:600,color:t.txt,marginBottom:"3px"}}>Due {q.due}</div>
                      <div style={{fontSize:"11px",color:t.mut}}>{q.period}</div>
                    </div>
                  ))}
                </div>
                <div style={{marginTop:"12px",padding:"12px 16px",background:t.inp,border:`1.5px solid ${t.brd}`,borderRadius:"10px",fontSize:"13px",color:t.mut,lineHeight:1.7}}>
                  💡 <strong style={{color:t.txt}}>Pro tip:</strong> Pay via IRS Direct Pay or EFTPS to avoid underpayment penalties.
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}


// ─── IMPORT TAB ───────────────────────────────────────────────────────────────
function ImportTab({onImport,selMonth,selYear,t,dark}){
  const [dragOver,setDragOver]=useState(false);
  const [file,setFile]=useState(null);
  const [paste,setPaste]=useState("");
  const [mode,setMode]=useState("upload");
  const [status,setStatus]=useState("idle");
  const [results,setResults]=useState([]);
  const [errMsg,setErrMsg]=useState("");
  const [sel,setSel]=useState({});
  const fRef=useRef();

  const toggle=id=>setSel(p=>({...p,[id]:!p[id]}));
  const selAll=()=>{const a={};results.forEach(r=>{a[r.id]=true;});setSel(a);};

  async function runAI(content,type){
    setStatus("loading"); setResults([]); setErrMsg("");
    const prompt=`Extract ALL income entries. Return ONLY a JSON array: [{"platform":"YouTube","amount":1240,"note":"Ad revenue","month":2,"year":2026}]. Platforms: ${PLATFORMS.map(p=>p.name).join(",")}. Default month=${selMonth}, year=${selYear}. Return [] if nothing found.`;
    try{
      const msgs=type==="image"
        ?[{role:"user",content:[{type:"image",source:{type:"base64",media_type:file.type,data:content}},{type:"text",text:prompt}]}]
        :[{role:"user",content:`${prompt}\n\nData:\n${content}`}];
      const res=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-sonnet-4-20250514",max_tokens:1000,messages:msgs})});
      const data=await res.json();
      const text=(data.content||[]).map(b=>b.text||"").join("");
      const parsed=JSON.parse(text.replace(/```json|```/g,"").trim());
      if(!Array.isArray(parsed)||!parsed.length){setStatus("error");setErrMsg("No income data found. Try pasting text directly.");return;}
      const wi=parsed.map((r,i)=>({...r,id:`r-${Date.now()}-${i}`}));
      setResults(wi);
      const a={};wi.forEach(r=>{a[r.id]=true;});setSel(a);
      setStatus("done");
    }catch(e){setStatus("error");setErrMsg("Could not read the data. Please try again.");}
  }

  async function handleFile(f){
    if(!f)return; setFile(f); setStatus("idle"); setResults([]);
    if(f.type.startsWith("image/")){const r=new FileReader();r.onload=e=>runAI(e.target.result.split(",")[1],"image");r.readAsDataURL(f);}
    else if(f.type==="text/csv"||f.type==="text/plain"||f.name.endsWith(".csv")||f.name.endsWith(".txt")){const r=new FileReader();r.onload=e=>runAI(e.target.result,"text");r.readAsText(f);}
    else{setStatus("error");setErrMsg("Please upload PNG, JPG, CSV, or TXT.");}
  }

  function confirm(){
    results.filter(r=>sel[r.id]).forEach(r=>onImport({id:Date.now()+Math.random(),platform:r.platform,amount:parseFloat(r.amount),month:r.month??selMonth,year:r.year??selYear,note:r.note||""}));
    setResults([]); setFile(null); setPaste(""); setStatus("idle"); setSel({});
  }

  const sC=Object.values(sel).filter(Boolean).length;
  const sT=results.filter(r=>sel[r.id]).reduce((s,r)=>s+parseFloat(r.amount||0),0);
  const inp={background:t.inp,border:`1.5px solid ${t.brd}`,color:t.txt,padding:"12px 16px",fontSize:"14px",borderRadius:"10px",fontFamily:"'Plus Jakarta Sans',system-ui,sans-serif",width:"100%"};

  // Platforms shown on the landing strip (exclude Other)
  const displayPlats=PLATFORMS.filter(p=>p.name!=="Other");

  return(
    <div style={{maxWidth:"700px"}}>
      <div style={{marginBottom:"26px"}}>
        <div style={{fontFamily:"'Outfit',sans-serif",fontSize:"34px",fontWeight:800,color:t.txt,marginBottom:"8px"}}>Smart Import</div>
        <p style={{fontSize:"15px",color:t.mut,lineHeight:1.7}}>Upload a screenshot or paste earnings text from any platform. AI reads it and logs your income automatically.</p>
      </div>

      {/* Mode toggle */}
      <div style={{display:"flex",gap:"4px",marginBottom:"22px",background:t.inp,padding:"4px",borderRadius:"12px",width:"fit-content",border:`1.5px solid ${t.brd}`}}>
        {[{id:"upload",l:"📎 Upload File"},{id:"paste",l:"📋 Paste Text"}].map(m=>(
          <button key={m.id} className="btn" onClick={()=>{setMode(m.id);setStatus("idle");setResults([]);}} style={{padding:"10px 22px",fontSize:"13px",fontWeight:600,background:mode===m.id?t.surf:"transparent",color:mode===m.id?t.txt:t.mut,borderRadius:"9px",border:mode===m.id?`1.5px solid ${t.brd}`:"none"}}>
            {m.l}
          </button>
        ))}
      </div>

      {/* Upload drop zone */}
      {mode==="upload"&&status!=="done"&&(
        <div className={`dz ${dragOver?"dg":""}`}
          onDragOver={e=>{e.preventDefault();setDragOver(true);}}
          onDragLeave={()=>setDragOver(false)}
          onDrop={e=>{e.preventDefault();setDragOver(false);handleFile(e.dataTransfer.files[0]);}}
          onClick={()=>fRef.current?.click()}
          style={{border:`2px dashed ${t.brd}`,borderRadius:"16px",padding:"56px 40px",textAlign:"center",cursor:"pointer",marginBottom:"20px",background:t.inp,transition:"all .2s"}}>
          <input ref={fRef} type="file" accept="image/*,.csv,.txt" style={{display:"none"}} onChange={e=>handleFile(e.target.files[0])}/>
          <div style={{fontSize:"48px",marginBottom:"14px"}}>📸</div>
          <div style={{fontSize:"18px",fontWeight:700,color:t.txt,marginBottom:"8px"}}>Drop a screenshot or CSV here</div>
          <div style={{fontSize:"14px",color:t.mut}}>PNG, JPG, CSV, TXT from any creator platform</div>
          {file&&status==="idle"&&<div style={{marginTop:"14px",fontSize:"13px",color:"#a259ff",fontWeight:600}}>📄 {file.name}</div>}
        </div>
      )}

      {/* Paste zone */}
      {mode==="paste"&&status!=="done"&&(
        <div style={{marginBottom:"20px"}}>
          <textarea value={paste} onChange={e=>setPaste(e.target.value)}
            placeholder={"Paste earnings text here…\n\nExample:\nYouTube Ad Revenue: $1,240.50\nPatreon Pledges: $850.00\nAmazon Associates: $310.22"}
            style={{...inp,minHeight:"160px",lineHeight:1.7,resize:"vertical",padding:"16px"}}/>
          <button className="btn" onClick={()=>paste.trim()&&runAI(paste,"text")} style={{marginTop:"10px",background:paste.trim()?t.acc:"#444",color:"#fff",padding:"12px 28px",fontSize:"14px",fontWeight:700,borderRadius:"10px"}}>
            Extract with AI →
          </button>
        </div>
      )}

      {/* Loading */}
      {status==="loading"&&(
        <div style={{textAlign:"center",padding:"52px",background:t.inp,border:`1.5px solid ${t.brd}`,borderRadius:"16px"}}>
          <div style={{fontSize:"40px",marginBottom:"14px"}}><span className="sp">⚙</span></div>
          <div style={{fontSize:"18px",fontWeight:700,color:t.txt,marginBottom:"6px"}}>Reading your earnings…</div>
          <div style={{marginTop:"20px",height:"6px",background:t.brd,borderRadius:"3px",overflow:"hidden"}}><div className="sh" style={{height:"100%",width:"100%"}}/></div>
        </div>
      )}

      {/* Error */}
      {status==="error"&&(
        <div className="su" style={{background:t.errBg,border:`1.5px solid ${t.dan}44`,borderRadius:"14px",padding:"20px 24px"}}>
          <div style={{fontSize:"15px",fontWeight:700,color:t.dan,marginBottom:"8px"}}>⚠ Extraction Failed</div>
          <div style={{fontSize:"14px",color:t.mut,marginBottom:"12px"}}>{errMsg}</div>
          <button className="btn" onClick={()=>{setStatus("idle");setFile(null);}} style={{background:t.inp,border:`1.5px solid ${t.brd}`,color:t.txt,padding:"9px 20px",fontSize:"13px",fontWeight:600,borderRadius:"8px"}}>Try Again</button>
        </div>
      )}

      {/* Results */}
      {status==="done"&&results.length>0&&(
        <div className="su">
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"}}>
            <div>
              <div style={{fontSize:"12px",color:t.mut,fontWeight:700,letterSpacing:"1px",textTransform:"uppercase",marginBottom:"4px"}}>AI Found {results.length} Entr{results.length===1?"y":"ies"}</div>
              <div style={{fontSize:"16px",fontWeight:700,color:t.acc}}>Select which to import</div>
            </div>
            <button className="btn" onClick={selAll} style={{background:t.inp,border:`1.5px solid ${t.brd}`,color:t.txt,padding:"9px 16px",fontSize:"13px",fontWeight:600,borderRadius:"8px"}}>Select All</button>
          </div>
          <div style={{border:`1.5px solid ${t.brd}`,borderRadius:"14px",overflow:"hidden",marginBottom:"14px"}}>
            {results.map((r,i)=>{
              const meta=getPM(r.platform), isS=!!sel[r.id];
              return(
                <div key={r.id} className="rr" onClick={()=>toggle(r.id)} style={{display:"flex",alignItems:"center",gap:"14px",padding:"16px 18px",borderBottom:i<results.length-1?`1px solid ${t.brd}`:"none",background:isS?t.selBg:t.inp,cursor:"pointer",transition:"background .14s",animationDelay:`${i*.05}s`}}>
                  <div style={{width:"22px",height:"22px",border:`2px solid ${isS?t.acc:t.fnt}`,borderRadius:"6px",background:isS?t.acc:"transparent",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                    {isS&&<span style={{color:"#fff",fontSize:"12px",fontWeight:800,lineHeight:1}}>✓</span>}
                  </div>
                  <PlatLogo name={r.platform} size={36}/>
                  <div style={{flex:1}}>
                    <div style={{fontSize:"15px",fontWeight:700,color:t.txt}}>{r.platform}</div>
                    <div style={{fontSize:"12px",color:t.mut,marginTop:"2px"}}>{r.note} · {MONTHS[r.month??selMonth]} {r.year??selYear}</div>
                  </div>
                  <div style={{fontFamily:"'Outfit',sans-serif",fontSize:"20px",fontWeight:800,color:t.acc}}>+${parseFloat(r.amount).toLocaleString()}</div>
                </div>
              );
            })}
          </div>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"14px 18px",background:t.inp,border:`1.5px solid ${t.brd}`,borderRadius:"12px",marginBottom:"14px"}}>
            <span style={{fontSize:"13px",color:t.mut,fontWeight:600}}>Total to import ({sC} selected)</span>
            <span style={{fontFamily:"'Outfit',sans-serif",fontSize:"22px",fontWeight:800,color:t.txt}}>${sT.toLocaleString()}</span>
          </div>
          <div style={{display:"flex",gap:"10px"}}>
            <button className="btn" onClick={confirm} disabled={sC===0} style={{background:sC>0?t.acc:"#444",color:"#fff",padding:"14px",fontSize:"15px",fontWeight:700,borderRadius:"12px",flex:1}}>
              ✓ Add {sC} Entr{sC===1?"y":"ies"} to Dashboard
            </button>
            <button className="btn" onClick={()=>{setStatus("idle");setFile(null);setResults([]);}} style={{background:t.inp,border:`1.5px solid ${t.brd}`,color:t.mut,padding:"14px 22px",fontSize:"13px",fontWeight:600,borderRadius:"12px"}}>Cancel</button>
          </div>
        </div>
      )}

      {/* How it works + supported platforms */}
      {status==="idle"&&(
        <div style={{marginTop:"28px"}}>
          <div style={{fontSize:"11px",color:t.fnt,fontWeight:700,letterSpacing:"1px",textTransform:"uppercase",marginBottom:"14px"}}>How It Works</div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"12px",marginBottom:"22px"}}>
            {[{s:"01",ic:"📸",ti:"Upload or paste",d:"Screenshot your earnings page or paste copied text"},{s:"02",ic:"🤖",ti:"AI extracts",d:"Finds amounts, platforms, and dates automatically"},{s:"03",ic:"✅",ti:"Review & confirm",d:"Check entries and add them to your dashboard"}].map(x=>(
              <div key={x.s} style={{background:t.inp,border:`1.5px solid ${t.brd}`,borderRadius:"14px",padding:"18px"}}>
                <div style={{fontSize:"10px",color:t.fnt,fontWeight:700,letterSpacing:"1px",marginBottom:"8px"}}>STEP {x.s}</div>
                <div style={{fontSize:"28px",marginBottom:"10px"}}>{x.ic}</div>
                <div style={{fontSize:"14px",fontWeight:700,color:t.txt,marginBottom:"4px"}}>{x.ti}</div>
                <div style={{fontSize:"13px",color:t.mut,lineHeight:1.5}}>{x.d}</div>
              </div>
            ))}
          </div>

          {/* Supported platforms strip */}
          <div style={{background:t.inp,border:`1.5px solid ${t.brd}`,borderRadius:"14px",padding:"20px"}}>
            <div style={{fontSize:"11px",color:t.fnt,fontWeight:700,letterSpacing:"1px",textTransform:"uppercase",marginBottom:"14px"}}>Supported Platforms</div>
            <div style={{display:"flex",flexWrap:"wrap",gap:"10px",alignItems:"center"}}>
              {displayPlats.map(p=>(
                <div key={p.name} style={{display:"flex",alignItems:"center",gap:"7px",background:t.crd,border:`1.5px solid ${t.cbrd}`,padding:"7px 12px",borderRadius:"10px"}}>
                  <PlatLogo name={p.name} size={20}/>
                  <span style={{fontSize:"13px",fontWeight:600,color:t.txt}}>{p.name}</span>
                </div>
              ))}
              {/* "Plus more" badge */}
              <div style={{display:"flex",alignItems:"center",gap:"7px",background:`${t.acc}18`,border:`1.5px solid ${t.acc}44`,padding:"7px 14px",borderRadius:"10px"}}>
                <span style={{fontSize:"16px"}}>✦</span>
                <span style={{fontSize:"13px",fontWeight:700,color:t.acc}}>& any other source</span>
              </div>
            </div>
            <div style={{marginTop:"12px",fontSize:"12px",color:t.mut,lineHeight:1.6}}>
              Track income from <strong style={{color:t.txt}}>any platform</strong> — just paste your earnings data or upload a screenshot and the AI will figure out the rest.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── LOGIN PAGE ───────────────────────────────────────────────────────────────
function LoginPage({dark,onLogin,onSignUp,onGuest,t}){
  const [mode,setMode]=useState("login");
  const [email,setEmail]=useState("");
  const [pass,setPass]=useState("");
  const [name,setName]=useState("");
  const [state,setState]=useState("");
  const [filing,setFiling]=useState("single");
  const [loading,setLoading]=useState(false);
  const [done,setDone]=useState(false);
  const [step,setStep]=useState(1);
  const [errMsg,setErrMsg]=useState("");
  const [showPass,setShowPass]=useState(false);

  async function next(){
    setErrMsg("");
    if(mode==="login"){
      if(!email||!pass)return;
      setLoading(true);
      const {error}=await onLogin({email,password:pass});
      if(error){setLoading(false);setErrMsg(error);return;}
      setLoading(false);setDone(true);
    } else if(step===1){
      if(!email||!pass||!name)return; setStep(2);
    } else {
      if(!state)return;
      setLoading(true);
      const {error}=await onSignUp({name,email,password:pass,state,filingStatus:filing});
      if(error){setLoading(false);setErrMsg(error);return;}
      setLoading(false);setDone(true);
    }
  }

  const inp={background:t.inp,border:`1.5px solid ${t.brd}`,color:t.txt,padding:"13px 16px",fontSize:"15px",width:"100%",borderRadius:"12px",fontFamily:"'Plus Jakarta Sans',system-ui,sans-serif",outline:"none"};

  return(
    <div style={{minHeight:"100vh",background:t.bg,display:"flex",alignItems:"center",justifyContent:"center"}}>
      <div style={{width:"100%",maxWidth:"440px",padding:"0 24px"}}>
        <div style={{textAlign:"center",marginBottom:"32px"}}>
          <div style={{width:"64px",height:"64px",borderRadius:"18px",background:`linear-gradient(135deg,${t.acc},#7b8cff)`,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 14px"}}><svg width="64" height="64" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="44" height="44" rx="12" fill="url(#cfgradlogin)"/>
  <defs>
    <linearGradient id="cfgradlogin" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stopColor="#00D4A0"/>
      <stop offset="100%" stopColor="#5B6BFF"/>
    </linearGradient>
  </defs>
  <rect x="9" y="28" width="6" height="8" rx="2" fill="white" fillOpacity="0.55"/>
  <rect x="19" y="21" width="6" height="15" rx="2" fill="white" fillOpacity="0.8"/>
  <rect x="29" y="13" width="6" height="23" rx="2" fill="white"/>
  <path d="M32 10 L32 6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  <path d="M30 8 L32 6 L34 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
</svg></div>
          <div style={{fontFamily:"'Outfit',sans-serif",fontSize:"28px",fontWeight:800,color:t.txt}}>CreatorFlow</div>
          <div style={{fontSize:"14px",color:t.mut,marginTop:"4px"}}>Income Tracker for Creators</div>
        </div>
        <div style={{background:t.crd,border:`1.5px solid ${t.cbrd}`,borderRadius:"20px",padding:"32px",boxShadow:"0 20px 60px rgba(0,0,0,.15)"}}>
          {/* Mode toggle */}
          <div style={{display:"flex",background:t.inp,borderRadius:"12px",padding:"4px",marginBottom:"24px"}}>
            {["login","signup"].map(m=>(
              <button key={m} className="btn" onClick={()=>{setMode(m);setStep(1);}} style={{flex:1,padding:"10px",fontSize:"14px",fontWeight:700,background:mode===m?t.surf:"transparent",color:mode===m?t.txt:t.mut,borderRadius:"10px",border:mode===m?`1.5px solid ${t.brd}`:"none"}}>
                {m==="login"?"Log In":"Sign Up"}
              </button>
            ))}
          </div>

          {done?(
            <div style={{textAlign:"center",padding:"28px 0"}}>
              <div style={{fontSize:"52px",marginBottom:"14px"}}>🎉</div>
              <div style={{fontFamily:"'Outfit',sans-serif",fontSize:"22px",fontWeight:800,color:t.acc}}>Welcome{name?`, ${name}`:""}!</div>
              <div style={{fontSize:"14px",color:t.mut,marginTop:"6px"}}>Loading your dashboard…</div>
            </div>
          ):(
            <div style={{display:"flex",flexDirection:"column",gap:"14px"}}>
              {/* Error message */}
              {errMsg&&<div style={{padding:"10px 14px",background:t.errBg,border:`1.5px solid ${t.dan}44`,borderRadius:"10px",fontSize:"13px",color:t.dan,fontWeight:500}}>{errMsg}</div>}
              {/* Step indicator */}
              {mode==="signup"&&(
                <div style={{display:"flex",alignItems:"center",gap:"6px",marginBottom:"4px"}}>
                  <div style={{flex:1,height:"4px",background:t.acc,borderRadius:"2px"}}/>
                  <div style={{flex:1,height:"4px",background:step===2?t.acc:t.brd,borderRadius:"2px",transition:"background .3s"}}/>
                  <span style={{fontSize:"11px",color:t.mut,fontWeight:600,whiteSpace:"nowrap"}}>Step {step} of 2</span>
                </div>
              )}

              {mode==="login"&&<>
                <div>
                  <label style={{fontSize:"11px",color:t.mut,fontWeight:700,letterSpacing:"1px",textTransform:"uppercase",display:"block",marginBottom:"7px"}}>Email</label>
                  <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com" type="email" style={inp}/>
                </div>
                <div>
                  <label style={{fontSize:"11px",color:t.mut,fontWeight:700,letterSpacing:"1px",textTransform:"uppercase",display:"block",marginBottom:"7px"}}>Password</label>
                  <div style={{position:"relative"}}>
                    <input value={pass} onChange={e=>setPass(e.target.value)} placeholder="••••••••" type={showPass?"text":"password"} style={{...inp,paddingRight:"44px"}} onKeyDown={e=>e.key==="Enter"&&next()}/>
                    <button type="button" onClick={()=>setShowPass(v=>!v)} style={{position:"absolute",right:"12px",top:"50%",transform:"translateY(-50%)",background:"transparent",border:"none",cursor:"pointer",color:t.mut,fontSize:"16px",padding:"4px",lineHeight:1}}>
                      {showPass?"🙈":"👁"}
                    </button>
                  </div>
                </div>
                <div style={{textAlign:"right"}}><span style={{fontSize:"13px",color:t.acc,cursor:"pointer",fontWeight:600}}>Forgot password?</span></div>
              </>}

              {mode==="signup"&&step===1&&<>
                <div>
                  <label style={{fontSize:"11px",color:t.mut,fontWeight:700,letterSpacing:"1px",textTransform:"uppercase",display:"block",marginBottom:"7px"}}>Your Name</label>
                  <input value={name} onChange={e=>setName(e.target.value)} placeholder="Creator name" style={inp}/>
                </div>
                <div>
                  <label style={{fontSize:"11px",color:t.mut,fontWeight:700,letterSpacing:"1px",textTransform:"uppercase",display:"block",marginBottom:"7px"}}>Email</label>
                  <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com" type="email" style={inp}/>
                </div>
                <div>
                  <label style={{fontSize:"11px",color:t.mut,fontWeight:700,letterSpacing:"1px",textTransform:"uppercase",display:"block",marginBottom:"7px"}}>Password</label>
                  <div style={{position:"relative"}}>
                    <input value={pass} onChange={e=>setPass(e.target.value)} placeholder="••••••••" type={showPass?"text":"password"} style={{...inp,paddingRight:"44px"}}/>
                    <button type="button" onClick={()=>setShowPass(v=>!v)} style={{position:"absolute",right:"12px",top:"50%",transform:"translateY(-50%)",background:"transparent",border:"none",cursor:"pointer",color:t.mut,fontSize:"16px",padding:"4px",lineHeight:1}}>
                      {showPass?"🙈":"👁"}
                    </button>
                  </div>
                </div>
              </>}

              {mode==="signup"&&step===2&&<>
                <div style={{padding:"14px 16px",background:`${t.acc}18`,border:`1.5px solid ${t.acc}44`,borderRadius:"12px"}}>
                  <div style={{fontSize:"16px",fontWeight:700,color:t.txt,marginBottom:"4px"}}>Almost there, {name}! 🎉</div>
                  <div style={{fontSize:"13px",color:t.mut}}>Two quick tax questions — saved to your profile so you never have to re-enter them.</div>
                </div>
                <div>
                  <label style={{fontSize:"11px",color:t.mut,fontWeight:700,letterSpacing:"1px",textTransform:"uppercase",display:"block",marginBottom:"7px"}}>Your State</label>
                  <StatePicker value={state} onChange={setState} t={t}/>
                  {state&&STATE_TAXES[state]===0&&<div style={{marginTop:"7px",fontSize:"13px",color:t.acc,fontWeight:600}}>✓ {state} has no state income tax — nice!</div>}
                </div>
                <div>
                  <label style={{fontSize:"11px",color:t.mut,fontWeight:700,letterSpacing:"1px",textTransform:"uppercase",display:"block",marginBottom:"7px"}}>Filing Status</label>
                  <div style={{display:"flex",gap:"6px"}}>
                    {Object.entries(FILING).map(([k,v])=>(
                      <button key={k} className="btn" onClick={()=>setFiling(k)} style={{flex:1,padding:"10px 6px",fontSize:"12px",fontWeight:700,background:filing===k?t.acc:t.inp,color:filing===k?"#fff":t.mut,border:`1.5px solid ${filing===k?t.acc:t.brd}`,borderRadius:"10px",textAlign:"center"}}>
                        {v==="Married Filing Jointly"?"Married":v}
                      </button>
                    ))}
                  </div>
                </div>
              </>}

              <button className="btn" onClick={next} style={{
                background:loading?t.brd:`linear-gradient(135deg,${t.acc},#00a87a)`,
                color:loading?t.mut:"#fff",
                padding:"14px",fontSize:"15px",fontWeight:700,borderRadius:"12px",
                marginTop:"4px",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",
                boxShadow:loading?"none":`0 8px 24px ${t.glo}`,
              }}>
                {loading?<><span className="sp" style={{fontSize:"16px"}}>⚙</span> Authenticating…</>:mode==="login"?"Log In →":step===1?"Next →":"Create Account →"}
              </button>

              {mode==="signup"&&step===2&&(
                <button className="btn" onClick={()=>setStep(1)} style={{background:"transparent",border:`1.5px solid ${t.brd}`,color:t.mut,padding:"12px",fontSize:"14px",fontWeight:600,borderRadius:"12px"}}>← Back</button>
              )}

              <div style={{textAlign:"center",marginTop:"4px"}}>
                <span style={{fontSize:"14px",color:t.mut}}>or </span>
                <span onClick={()=>onGuest&&onGuest()} style={{fontSize:"14px",color:t.acc,cursor:"pointer",fontWeight:700,textDecoration:"underline",textDecorationColor:`${t.acc}55`}}>continue as guest</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── LANDING PAGE ─────────────────────────────────────────────────────────────
function LandingPage({dark,onEnter,t}){
  const w=useW();
  const features=[
    {icon:"📊",title:"Unified Dashboard",desc:"All your income streams in one clean view. Stop logging into 10 different dashboards every month."},
    {icon:"🤖",title:"AI-Powered Import",desc:"Drop a screenshot or paste earnings text from any platform. AI reads and logs everything automatically."},
    {icon:"📈",title:"Yearly Analytics",desc:"Deep charts for every platform, year-over-year comparisons, and monthly breakdowns — all in one place."},
    {icon:"🧾",title:"Real Tax Estimator",desc:"Federal + state + self-employment tax calculated for your exact state. Set your profile once, use it forever."},
    {icon:"🎯",title:"Income Goals",desc:"Set monthly targets and watch a live progress bar fill up in real time. Celebrate when you hit them."},
    {icon:"📤",title:"CSV Export",desc:"Export any year's income data with one click. Ready for your accountant, spreadsheet, or records."},
  ];

  const accentGrad=`linear-gradient(135deg,${t.acc},#7b8cff)`;

  return(
    <div style={{minHeight:"100vh",background:t.bg,color:t.txt}}>
      {/* Hero */}
      <div style={{maxWidth:"960px",margin:"0 auto",padding:w<600?"70px 20px 50px":"110px 40px 90px",textAlign:"center"}}>
        <div style={{display:"inline-flex",alignItems:"center",gap:"8px",background:`${t.acc}18`,border:`1.5px solid ${t.acc}44`,padding:"8px 18px",borderRadius:"100px",fontSize:"13px",fontWeight:700,color:t.acc,marginBottom:"28px"}}>
          ✦ Built for content creators
        </div>

        <h1 style={{fontFamily:"'Outfit',sans-serif",fontSize:"clamp(38px,6.5vw,72px)",fontWeight:800,lineHeight:1.0,marginBottom:"26px",color:t.txt,letterSpacing:"0px"}}>
          Know every dollar<br/>
          <span style={{color:t.acc}}>you've earned.</span>
        </h1>

        <p style={{fontSize:"18px",color:t.mut,lineHeight:1.8,maxWidth:"540px",margin:"0 auto 44px",fontWeight:400}}>
          CreatorFlow tracks income from YouTube, Patreon, TikTok, Spotify, sponsorships, and more — then calculates exactly what you owe in taxes.
        </p>

        <div style={{display:"flex",gap:"14px",justifyContent:"center",flexWrap:"wrap"}}>
          <button className="btn" onClick={onEnter} style={{background:accentGrad,color:"#fff",padding:"16px 40px",fontSize:"16px",fontWeight:700,borderRadius:"14px",boxShadow:`0 12px 32px ${t.glo}`}}>
            Get Started Free →
          </button>
          <button className="btn" onClick={onEnter} style={{background:"transparent",color:t.mut,padding:"16px 40px",fontSize:"16px",fontWeight:600,borderRadius:"14px",border:`1.5px solid ${t.brd}`}}>
            View Demo
          </button>
        </div>

        {/* Platform strip */}
        <div style={{marginTop:"56px"}}>
          <div style={{fontSize:"11px",color:t.mut,fontWeight:700,letterSpacing:"1.5px",textTransform:"uppercase",marginBottom:"18px"}}>Works with every platform you use</div>
          <div style={{display:"flex",flexWrap:"wrap",gap:"10px",justifyContent:"center",alignItems:"center"}}>
            {PLATFORMS.filter(p=>p.name!=="Other").map(p=>(
              <div key={p.name} style={{display:"flex",alignItems:"center",gap:"8px",background:t.crd,border:`1.5px solid ${t.cbrd}`,padding:"9px 15px",borderRadius:"12px",boxShadow:"0 2px 8px rgba(0,0,0,.05)"}}>
                <PlatLogo name={p.name} size={22}/>
                <span style={{fontSize:"14px",fontWeight:600,color:t.txt}}>{p.name}</span>
              </div>
            ))}
            {/* Plus more badge */}
            <div style={{display:"flex",alignItems:"center",gap:"7px",background:`${t.acc}18`,border:`1.5px dashed ${t.acc}66`,padding:"9px 16px",borderRadius:"12px"}}>
              <span style={{fontSize:"16px"}}>✦</span>
              <span style={{fontSize:"14px",fontWeight:700,color:t.acc}}>& many more</span>
            </div>
          </div>
          <div style={{marginTop:"12px",fontSize:"13px",color:t.mut}}>
            Track income from <strong style={{color:t.txt}}>any source</strong> — just paste your earnings data or use the "Other" category
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div style={{borderTop:`1.5px solid ${t.brd}`,borderBottom:`1.5px solid ${t.brd}`}}>
        <div style={{maxWidth:"960px",margin:"0 auto",display:"grid",gridTemplateColumns:w<600?"1fr":"repeat(3,1fr)"}}>
          {[["$2.4M+","tracked by creators"],["12+","income sources supported"],["3 min","average setup time"]].map(([v,l],i)=>(
            <div key={i} style={{padding:"44px 32px",textAlign:"center",borderRight:i<2?`1.5px solid ${t.brd}`:"none"}}>
              <div style={{fontFamily:"'Outfit',sans-serif",fontSize:"46px",fontWeight:800,color:t.acc,letterSpacing:"0px"}}>{v}</div>
              <div style={{fontSize:"13px",color:t.mut,fontWeight:600,letterSpacing:"1px",textTransform:"uppercase",marginTop:"6px"}}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div style={{maxWidth:"1000px",margin:"0 auto",padding:w<600?"50px 20px":"90px 40px"}}>
        <div style={{textAlign:"center",marginBottom:"52px"}}>
          <div style={{fontSize:"11px",color:t.mut,fontWeight:700,letterSpacing:"2px",textTransform:"uppercase",marginBottom:"14px"}}>Everything You Need</div>
          <div style={{fontFamily:"'Outfit',sans-serif",fontSize:"38px",fontWeight:800,color:t.txt,letterSpacing:"0px"}}>One app. Every income stream.</div>
        </div>
        <div style={{display:"grid",gridTemplateColumns:w<600?"1fr":w<900?"1fr 1fr":"repeat(3,1fr)",gap:"16px"}}>
          {features.map(f=>(
            <div key={f.title} className="card" style={{background:t.crd,border:`1.5px solid ${t.cbrd}`,borderRadius:"18px",padding:"28px 24px"}}>
              <div style={{width:"50px",height:"50px",borderRadius:"14px",background:`${t.acc}18`,border:`1.5px solid ${t.acc}33`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"24px",marginBottom:"16px"}}>
                {f.icon}
              </div>
              <div style={{fontFamily:"'Outfit',sans-serif",fontSize:"18px",fontWeight:800,color:t.txt,marginBottom:"10px"}}>{f.title}</div>
              <div style={{fontSize:"14px",color:t.mut,lineHeight:1.75}}>{f.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA — uses t.ctaBg which is theme-aware */}
      <div style={{background:t.ctaBg,padding:w<600?"50px 20px":"88px 40px",textAlign:"center"}}>
        <div style={{fontFamily:"'Outfit',sans-serif",fontSize:"42px",fontWeight:800,color:"#f2efe8",marginBottom:"16px",letterSpacing:"0px"}}>
          Start tracking today.
        </div>
        <p style={{fontSize:"16px",color:"#88887a",marginBottom:"36px",fontWeight:400}}>Free to use. No credit card required.</p>
        <button className="btn" onClick={onEnter} style={{background:accentGrad,color:"#fff",padding:"18px 48px",fontSize:"17px",fontWeight:700,borderRadius:"14px",boxShadow:`0 16px 40px ${t.glo}`}}>
          Open Dashboard →
        </button>
      </div>

      <div style={{background:t.ctaBg,textAlign:"center",padding:"0 0 28px",fontSize:"13px",color:"#55554a",fontWeight:500}}>
        CreatorFlow © 2026 — Your money, clearly.
      </div>
    </div>
  );
}



function ExpensesTab({entries,dark,selMonth,selYear,expenses,setExpenses,addExpense:addExpenseProp,updateExpense:updateExpenseProp,deleteExpense:deleteExpenseProp}){
  const t=T(dark);
  const w=useW();

  const [viewMonth,setViewMonth]=useState(selMonth);
  const [viewYear,setViewYear]=useState(selYear);
  const [activeView,setActiveView]=useState("overview"); // overview | transactions | add
  const [editId,setEditId]=useState(null);
  const [animIn,setAnimIn]=useState(false);
  useEffect(()=>{setTimeout(()=>setAnimIn(true),60);},[]);

  const BLANK={name:"",amount:"",category:"software",type:"expense",recurring:false,recurringFreq:"monthly",recurringStart:"",note:"",taxDeduction:false};
  const [form,setForm]=useState(BLANK);
  const [editForm,setEditForm]=useState(null);
  const FREQ_LABELS={"monthly":"Monthly","quarterly":"Quarterly","yearly":"Yearly"};

  // ── Recurring projection ───────────────────────────────────────────────────
  function recurringApplies(exp,m,y){
    if(!exp.recurring||!exp.recurringFreq||!exp.recurringStart) return false;
    const start=new Date(exp.recurringStart+"T12:00:00");
    const sm=start.getMonth(), sy=start.getFullYear();
    if(y<sy||(y===sy&&m<sm)) return false;
    if(exp.recurringFreq==="monthly") return true;
    if(exp.recurringFreq==="quarterly") return ((y-sy)*12+(m-sm))%3===0;
    if(exp.recurringFreq==="yearly") return m===sm;
    return false;
  }

  // Build viewed entries for current month
  const viewedEntries=[];
  const seenIds=new Set();
  expenses.forEach(e=>{
    const d=new Date(e.date+"T12:00:00");
    if(d.getMonth()===viewMonth&&d.getFullYear()===viewYear){
      viewedEntries.push({...e,_virtual:false});
      if(e.recurring) seenIds.add(e.id);
    }
  });
  expenses.forEach(e=>{
    if(!e.recurring||!e.recurringFreq||!e.recurringStart) return;
    if(seenIds.has(e.id)) return;
    if(!recurringApplies(e,viewMonth,viewYear)) return;
    const projDate=`${viewYear}-${String(viewMonth+1).padStart(2,"0")}-01`;
    viewedEntries.push({...e,date:projDate,_virtual:true,_masterId:e.id});
    seenIds.add(e.id);
  });

  const monthExp=viewedEntries;
  const totalExpenses=monthExp.filter(e=>e.type==="expense").reduce((s,e)=>s+e.amount,0);
  const totalFees=monthExp.filter(e=>e.type==="fee").reduce((s,e)=>s+e.amount,0);
  const totalOut=totalExpenses+totalFees;
  const recurringTotal=monthExp.filter(e=>e.recurring).reduce((s,e)=>s+e.amount,0);
  const deductibleTotal=monthExp.filter(e=>e.taxDeduction).reduce((s,e)=>s+e.amount,0);
  const monthIncome=entries.filter(e=>e.month===viewMonth&&e.year===viewYear).reduce((s,e)=>s+e.amount,0);
  const netIncome=monthIncome-totalOut;

  // 6-month trend
  const trendMonths=[];
  for(let i=5;i>=0;i--){
    let m=viewMonth-i, y=viewYear;
    if(m<0){m+=12;y--;}
    const tEntries=[];
    const tSeen=new Set();
    expenses.forEach(e=>{
      const d=new Date(e.date+"T12:00:00");
      if(d.getMonth()===m&&d.getFullYear()===y){tEntries.push(e);if(e.recurring)tSeen.add(e.id);}
    });
    expenses.forEach(e=>{
      if(!e.recurring||!e.recurringFreq||!e.recurringStart) return;
      if(tSeen.has(e.id)) return;
      if(recurringApplies(e,m,y)) tEntries.push({...e,_virtual:true});
    });
    const mInc=entries.filter(e=>e.month===m&&e.year===y).reduce((s,e)=>s+e.amount,0);
    trendMonths.push({month:MONTHS[m],expenses:tEntries.filter(e=>e.type==="expense").reduce((s,e)=>s+e.amount,0),fees:tEntries.filter(e=>e.type==="fee").reduce((s,e)=>s+e.amount,0),income:mInc});
  }

  // Category breakdown
  const byCat=EXP_CATS.map(cat=>{
    const ce=monthExp.filter(e=>e.category===cat.id);
    return{...cat,total:ce.reduce((s,e)=>s+e.amount,0),count:ce.length};
  }).filter(c=>c.total>0).sort((a,b)=>b.total-a.total);
  const maxCat=byCat[0]?.total||1;

  // CRUD
  function addExpense(){
    if(!form.name||!form.amount) return;
    const projDate=`${viewYear}-${String(viewMonth+1).padStart(2,"0")}-01`;
    const rs=form.recurring?projDate:null;
    const newExp={id:`e${Date.now()}`,date:projDate,amount:parseFloat(form.amount),category:form.category,name:form.name,note:form.note,type:form.type,recurring:form.recurring,recurringFreq:form.recurring?form.recurringFreq:null,recurringStart:rs,taxDeduction:form.taxDeduction||false};
    if(addExpenseProp) addExpenseProp(newExp); else setExpenses(p=>[...p,newExp]);
    setForm(BLANK);
    setActiveView("transactions");
  }

  function deleteExpense(id){
    if(deleteExpenseProp) deleteExpenseProp(id); else setExpenses(p=>p.filter(e=>e.id!==id));
  }

  function startEdit(e){
    setEditId(e.id);
    setEditForm({name:e.name,amount:String(e.amount),category:e.category,type:e.type,note:e.note||"",recurring:e.recurring,recurringFreq:e.recurringFreq||"monthly",taxDeduction:e.taxDeduction||false});
  }

  function saveEdit(id){
    if(!editForm.name||!editForm.amount) return;
    const changes={name:editForm.name,amount:parseFloat(editForm.amount),category:editForm.category,type:editForm.type,note:editForm.note,recurring:editForm.recurring,recurringFreq:editForm.recurring?editForm.recurringFreq:null,taxDeduction:editForm.taxDeduction||false};
    if(updateExpenseProp) updateExpenseProp(id,changes); else setExpenses(p=>p.map(e=>e.id===id?{...e,...changes}:e));
    setEditId(null);setEditForm(null);
  }

  function cancelEdit(){setEditId(null);setEditForm(null);}

  const getCat=id=>EXP_CATS.find(c=>c.id===id)||EXP_CATS[EXP_CATS.length-1];
  const inp={background:t.inp,border:`1.5px solid ${t.brd}`,color:t.txt,padding:"10px 14px",fontSize:"13px",width:"100%",borderRadius:"10px",fontFamily:"'Plus Jakarta Sans',system-ui,sans-serif"};

  function FreqPicker({val,onChange}){
    return(
      <div style={{display:"flex",gap:"6px"}}>
        {Object.entries(FREQ_LABELS).map(([k,l])=>(
          <button key={k} className="btn" onClick={()=>onChange(k)} style={{flex:1,padding:"9px 4px",fontSize:"12px",fontWeight:600,background:val===k?t.acc:"transparent",color:val===k?"#fff":t.mut,border:`1.5px solid ${val===k?t.acc:t.brd}`,borderRadius:"7px",textAlign:"center"}}>
            {l}
          </button>
        ))}
      </div>
    );
  }

  return(
    <div style={{maxWidth:"1000px"}}>

      {/* ── Period selector ── */}
      <div className={`fi ${animIn?"on":""}`} style={{display:"flex",alignItems:"center",gap:"8px",marginBottom:"20px",flexWrap:"wrap"}}>
        <span style={{fontSize:"11px",color:t.mut,fontWeight:700,letterSpacing:"1px"}}>PERIOD</span>
        {MONTHS.map((m,i)=>(
          <button key={m} className="mb btn" onClick={()=>setViewMonth(i)} style={{padding:w<600?"5px 8px":"7px 13px",fontSize:w<600?"11px":"13px",fontWeight:600,background:viewMonth===i?t.acc:"transparent",color:viewMonth===i?"#fff":t.mut,border:`1.5px solid ${viewMonth===i?t.acc:t.brd}`,borderRadius:"8px"}}>
            {m}
          </button>
        ))}
        <div style={{marginLeft:"8px",paddingLeft:"10px",borderLeft:`1.5px solid ${t.brd}`,position:"relative",display:"inline-flex",alignItems:"center"}}>
          <select value={viewYear} onChange={e=>setViewYear(Number(e.target.value))} style={{appearance:"none",WebkitAppearance:"none",background:t.crd,border:`1.5px solid ${t.brd}`,color:t.txt,padding:"7px 34px 7px 14px",fontSize:"13px",fontWeight:700,borderRadius:"10px",cursor:"pointer",fontFamily:"'Plus Jakarta Sans',system-ui,sans-serif",outline:"none"}}>
            {[2024,2025,2026].map(y=><option key={y}>{y}</option>)}
          </select>
          <span style={{position:"absolute",right:"11px",pointerEvents:"none",color:t.mut,fontSize:"11px"}}>▾</span>
        </div>
      </div>

      {/* ── Summary bar: 4 key numbers ── */}
      <div className={`fi ${animIn?"on":""}`} style={{display:"grid",gridTemplateColumns:w<600?"1fr 1fr":"repeat(4,1fr)",gap:"12px",marginBottom:"20px",transitionDelay:"0.05s"}}>
        {[
          {label:"Total Out",   val:`$${totalOut.toLocaleString()}`,     color:t.dan,  bg:`${t.dan}12`,  icon:"💸"},
          {label:"Net Income",  val:`$${Math.abs(netIncome).toLocaleString()}${netIncome<0?" 🔴":""}`, color:netIncome>=0?t.acc:t.dan, bg:netIncome>=0?`${t.acc}12`:`${t.dan}12`, icon:netIncome>=0?"✅":"⚠️"},
          {label:"Recurring",   val:`$${recurringTotal.toLocaleString()}/mo`, color:"#a259ff", bg:"#a259ff12", icon:"🔁"},
          {label:"Tax Deductible",  val:`$${deductibleTotal.toLocaleString()}`, color:"#00b894", bg:"#00b89412", icon:"🧾"},
        ].map((s,i)=>(
          <div key={s.label} className={`fi card ${animIn?"on":""}`} style={{background:t.crd,border:`1.5px solid ${t.cbrd}`,borderRadius:"14px",padding:"16px",transitionDelay:`${i*.06}s`,position:"relative",overflow:"hidden"}}>
            <div style={{position:"absolute",top:0,left:0,right:0,height:"3px",background:s.color,opacity:.7}}/>
            <div style={{fontSize:"11px",color:t.mut,fontWeight:700,letterSpacing:"1px",textTransform:"uppercase",marginBottom:"8px",display:"flex",justifyContent:"space-between"}}>
              {s.label}<span>{s.icon}</span>
            </div>
            <div style={{fontFamily:"'Outfit',sans-serif",fontSize:"22px",fontWeight:800,color:s.color}}>{s.val}</div>
          </div>
        ))}
      </div>

      {/* ── Tab switcher ── */}
      <div className={`fi ${animIn?"on":""}`} style={{display:"flex",background:t.inp,borderRadius:"12px",padding:"4px",gap:"4px",marginBottom:"20px",border:`1.5px solid ${t.brd}`,transitionDelay:"0.1s"}}>
        {[["overview","📊 Overview"],["transactions","📋 Transactions"],["add","+ Add Expense"]].map(([id,label])=>(
          <button key={id} className="btn" onClick={()=>{setActiveView(id);if(id!=="transactions")setEditId(null);}} style={{flex:1,padding:"10px",fontSize:"13px",fontWeight:activeView===id?700:500,background:activeView===id?t.crd:"transparent",color:activeView===id?t.txt:t.mut,borderRadius:"9px",border:activeView===id?`1.5px solid ${t.brd}`:"none",transition:"all .15s"}}>
            {label}
          </button>
        ))}
      </div>

      {/* ── VIEW: OVERVIEW ── */}
      {activeView==="overview"&&(
        <div style={{display:"flex",flexDirection:"column",gap:"16px"}}>

          {/* Income vs spending bar */}
          <div className={`fi ${animIn?"on":""}`} style={{background:t.crd,border:`1.5px solid ${t.cbrd}`,borderRadius:"16px",padding:"24px",transitionDelay:"0.15s"}}>
            <div style={{fontSize:"11px",color:t.mut,fontWeight:700,letterSpacing:"1px",textTransform:"uppercase",marginBottom:"16px"}}>
              {MONTHS[viewMonth]} {viewYear} — Income vs Spending
            </div>
            <div style={{display:"flex",alignItems:"center",gap:"20px",marginBottom:"16px",flexWrap:"wrap"}}>
              <div style={{textAlign:"center"}}>
                <div style={{fontSize:"11px",color:t.acc,fontWeight:700,marginBottom:"4px"}}>INCOME</div>
                <div style={{fontFamily:"'Outfit',sans-serif",fontSize:"28px",fontWeight:800,color:t.acc}}>${monthIncome.toLocaleString()}</div>
              </div>
              <div style={{fontSize:"20px",color:t.mut}}>vs</div>
              <div style={{textAlign:"center"}}>
                <div style={{fontSize:"11px",color:t.dan,fontWeight:700,marginBottom:"4px"}}>SPENT</div>
                <div style={{fontFamily:"'Outfit',sans-serif",fontSize:"28px",fontWeight:800,color:t.dan}}>${totalOut.toLocaleString()}</div>
              </div>
              <div style={{flex:1,minWidth:"120px"}}>
                <div style={{fontSize:"11px",color:t.mut,marginBottom:"6px",fontWeight:600}}>
                  {monthIncome>0?`${((totalOut/monthIncome)*100).toFixed(0)}% of income spent`:"No income tracked this month"}
                </div>
                <div style={{height:"10px",background:t.fnt,borderRadius:"5px",overflow:"hidden",display:"flex"}}>
                  <div style={{width:monthIncome>0?`${Math.min((totalExpenses/monthIncome)*100,100)}%`:"0",background:t.wrn,transition:"width 1s ease"}}/>
                  <div style={{width:monthIncome>0?`${Math.min((totalFees/monthIncome)*100,100)}%`:"0",background:t.dan,transition:"width 1s ease"}}/>
                </div>
                <div style={{display:"flex",gap:"12px",marginTop:"6px"}}>
                  <div style={{display:"flex",alignItems:"center",gap:"5px"}}><div style={{width:"8px",height:"8px",borderRadius:"2px",background:t.wrn}}/><span style={{fontSize:"11px",color:t.mut}}>Expenses</span></div>
                  <div style={{display:"flex",alignItems:"center",gap:"5px"}}><div style={{width:"8px",height:"8px",borderRadius:"2px",background:t.dan}}/><span style={{fontSize:"11px",color:t.mut}}>Fees</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* Category breakdown */}
          <div className={`fi ${animIn?"on":""}`} style={{background:t.crd,border:`1.5px solid ${t.cbrd}`,borderRadius:"16px",padding:"24px",transitionDelay:"0.2s"}}>
            <div style={{fontSize:"11px",color:t.mut,fontWeight:700,letterSpacing:"1px",textTransform:"uppercase",marginBottom:"16px"}}>Spending by Category</div>
            {byCat.length===0
              ?<div style={{textAlign:"center",padding:"24px 0",color:t.fnt,fontSize:"14px"}}>No expenses this month</div>
              :byCat.map((cat,i)=>(
                <div key={cat.id} style={{marginBottom:"14px"}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"6px"}}>
                    <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
                      <div style={{width:"32px",height:"32px",borderRadius:"9px",background:`${cat.color}22`,border:`1.5px solid ${cat.color}44`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"16px"}}>{cat.icon}</div>
                      <div>
                        <div style={{fontSize:"13px",fontWeight:600,color:t.txt}}>{cat.label}</div>
                        <div style={{fontSize:"11px",color:t.mut}}>{cat.count} item{cat.count!==1?"s":""}</div>
                      </div>
                    </div>
                    <div style={{textAlign:"right"}}>
                      <div style={{fontSize:"15px",fontWeight:800,color:cat.color}}>${cat.total.toLocaleString()}</div>
                      <div style={{fontSize:"11px",color:t.mut}}>{totalOut>0?((cat.total/totalOut)*100).toFixed(0):0}%</div>
                    </div>
                  </div>
                  <div style={{height:"6px",background:t.fnt,borderRadius:"3px",overflow:"hidden"}}>
                    <div className="bf" style={{height:"100%",width:animIn?`${(cat.total/maxCat)*100}%`:"0%",background:`linear-gradient(90deg,${cat.color},${cat.color}99)`,borderRadius:"3px",transitionDelay:`${0.2+i*.05}s`}}/>
                  </div>
                </div>
              ))
            }
          </div>

          {/* 6-month trend */}
          <div className={`fi ${animIn?"on":""}`} style={{background:t.crd,border:`1.5px solid ${t.cbrd}`,borderRadius:"16px",padding:"24px",transitionDelay:"0.25s"}}>
            <div style={{fontSize:"11px",color:t.mut,fontWeight:700,letterSpacing:"1px",textTransform:"uppercase",marginBottom:"16px"}}>6-Month Trend</div>
            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={trendMonths} margin={{top:4,right:4,left:0,bottom:4}}>
                <XAxis dataKey="month" tick={{fill:t.mut,fontSize:11}} axisLine={false} tickLine={false}/>
                <YAxis tick={{fill:t.mut,fontSize:11}} axisLine={false} tickLine={false} tickFormatter={v=>`$${(v/1000).toFixed(0)}k`}/>
                <Tooltip content={p=><CTip {...p} dark={dark}/>}/>
                <Bar dataKey="expenses" name="Expenses" stackId="a" fill={t.wrn} opacity={.85}/>
                <Bar dataKey="fees"     name="Fees"     stackId="a" fill={t.dan} opacity={.85} radius={[4,4,0,0]}/>
              </BarChart>
            </ResponsiveContainer>
            <div style={{display:"flex",gap:"16px",marginTop:"8px"}}>
              <div style={{display:"flex",alignItems:"center",gap:"5px"}}><div style={{width:"10px",height:"10px",borderRadius:"2px",background:t.wrn}}/><span style={{fontSize:"11px",color:t.mut}}>Expenses</span></div>
              <div style={{display:"flex",alignItems:"center",gap:"5px"}}><div style={{width:"10px",height:"10px",borderRadius:"2px",background:t.dan}}/><span style={{fontSize:"11px",color:t.mut}}>Fees</span></div>
            </div>
          </div>
        </div>
      )}

      {/* ── VIEW: TRANSACTIONS ── */}
      {activeView==="transactions"&&(
        <div className={`fi ${animIn?"on":""}`} style={{background:t.crd,border:`1.5px solid ${t.cbrd}`,borderRadius:"16px",padding:"22px",transitionDelay:"0.1s"}}>
          {/* Filter row */}
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px",flexWrap:"wrap",gap:"10px"}}>
            <div style={{fontSize:"14px",fontWeight:700,color:t.txt}}>{monthExp.length} transactions in {MONTHS[viewMonth]}</div>
            <div style={{display:"flex",gap:"8px",flexWrap:"wrap"}}>
              <select onChange={e=>{}} style={{background:t.inp,border:`1.5px solid ${t.brd}`,color:t.txt,padding:"7px 12px",fontSize:"12px",borderRadius:"8px",fontFamily:"'Plus Jakarta Sans',system-ui,sans-serif",fontWeight:600}}>
                <option value="all">All Categories</option>
                {EXP_CATS.map(c=><option key={c.id} value={c.id}>{c.icon} {c.label}</option>)}
              </select>
            </div>
          </div>

          {/* Transaction rows */}
          <div style={{maxHeight:"520px",overflowY:"auto",display:"flex",flexDirection:"column",gap:"8px"}}>
            {monthExp.length===0
              ?<div style={{textAlign:"center",padding:"48px 0",color:t.fnt}}>
                  <div style={{fontSize:"32px",marginBottom:"12px"}}>💸</div>
                  <div style={{fontSize:"15px",fontWeight:600,color:t.mut,marginBottom:"8px"}}>No expenses this month</div>
                  <button className="btn" onClick={()=>setActiveView("add")} style={{background:t.acc,color:"#fff",padding:"10px 24px",fontSize:"13px",fontWeight:700,borderRadius:"8px"}}>+ Add First Expense</button>
                </div>
              :monthExp.sort((a,b)=>new Date(b.date+"T12:00:00")-new Date(a.date+"T12:00:00")).map(e=>{
                const cat=getCat(e.category);
                const isEditing=editId===e.id;
                return(
                  <div key={e._virtual?`v-${e.id}`:e.id}>
                    {/* ── VIEW ROW ── */}
                    {!isEditing&&(
                      <div className="hr" style={{display:"flex",alignItems:"center",gap:"12px",padding:"12px",background:t.inp,borderRadius:"12px",border:`1px solid ${t.brd}`,transition:"all .13s"}}>
                        <div style={{width:"40px",height:"40px",borderRadius:"11px",background:`${cat.color}22`,border:`1.5px solid ${cat.color}44`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"18px",flexShrink:0}}>
                          {cat.icon}
                        </div>
                        <div style={{flex:1,minWidth:0}}>
                          <div style={{display:"flex",alignItems:"center",gap:"6px",marginBottom:"3px",flexWrap:"wrap"}}>
                            <span style={{fontSize:"14px",fontWeight:600,color:t.txt}}>{e.name}</span>
                            {e._virtual&&<span style={{fontSize:"10px",fontWeight:700,color:"#7b8cff",background:"#7b8cff18",padding:"1px 6px",borderRadius:"4px"}}>AUTO</span>}
                            {e.recurring&&e.recurringFreq&&<span style={{fontSize:"10px",fontWeight:700,color:t.acc,background:`${t.acc}18`,padding:"1px 6px",borderRadius:"4px"}}>🔁 {FREQ_LABELS[e.recurringFreq]}</span>}
                            {e.taxDeduction&&<span style={{fontSize:"10px",fontWeight:700,color:"#00b894",background:"#00b89418",padding:"1px 6px",borderRadius:"4px"}}>🧾 Deductible</span>}
                            <span style={{fontSize:"10px",fontWeight:700,color:e.type==="fee"?t.dan:t.wrn,background:e.type==="fee"?`${t.dan}18`:`${t.wrn}18`,padding:"1px 6px",borderRadius:"4px"}}>{e.type==="fee"?"FEE":"EXPENSE"}</span>
                          </div>
                          <div style={{fontSize:"12px",color:t.mut}}>{cat.label}{e.note&&` · ${e.note}`} · {new Date(e.date+"T12:00:00").toLocaleDateString("en-US",{month:"short",day:"numeric"})}</div>
                        </div>
                        <div style={{display:"flex",alignItems:"center",gap:"8px",flexShrink:0}}>
                          <span style={{fontFamily:"'Outfit',sans-serif",fontSize:"17px",fontWeight:800,color:e.type==="fee"?t.dan:t.wrn}}>-${e.amount.toLocaleString()}</span>
                          <button className="btn" onClick={()=>startEdit(e)} style={{background:t.crd,border:`1.5px solid ${t.brd}`,color:t.mut,fontSize:"11px",fontWeight:600,padding:"5px 10px",borderRadius:"6px"}}>Edit</button>
                          <button className="db btn" onClick={()=>deleteExpense(e.id)} style={{background:"transparent",color:t.dan,fontSize:"18px",padding:"2px 6px",borderRadius:"6px",lineHeight:1}}>×</button>
                        </div>
                      </div>
                    )}

                    {/* ── INLINE EDIT ROW ── */}
                    {isEditing&&editForm&&(
                      <div style={{background:t.inp,border:`1.5px solid ${t.acc}55`,borderRadius:"14px",padding:"16px"}}>
                        <div style={{fontSize:"11px",color:t.acc,fontWeight:700,letterSpacing:"1px",textTransform:"uppercase",marginBottom:"12px"}}>Edit Transaction</div>
                        <div style={{display:"grid",gridTemplateColumns:w<600?"1fr":"2fr 1fr 1fr",gap:"8px",marginBottom:"10px"}}>
                          <div>
                            <div style={{fontSize:"10px",color:t.mut,fontWeight:600,marginBottom:"4px"}}>NAME</div>
                            <input value={editForm.name} onChange={e=>setEditForm({...editForm,name:e.target.value})} style={inp}/>
                          </div>
                          <div>
                            <div style={{fontSize:"10px",color:t.mut,fontWeight:600,marginBottom:"4px"}}>AMOUNT ($)</div>
                            <input value={editForm.amount} onChange={e=>setEditForm({...editForm,amount:e.target.value})} type="number" style={inp}/>
                          </div>
                          <div>
                            <div style={{fontSize:"10px",color:t.mut,fontWeight:600,marginBottom:"4px"}}>TYPE</div>
                            <div style={{display:"flex",gap:"4px"}}>
                              {[["expense","Expense"],["fee","Fee"]].map(([v,l])=>(
                                <button key={v} className="btn" onClick={()=>setEditForm({...editForm,type:v})} style={{flex:1,padding:"10px 4px",fontSize:"11px",fontWeight:600,background:editForm.type===v?t.txt:t.crd,color:editForm.type===v?t.bg:t.mut,border:`1.5px solid ${editForm.type===v?t.txt:t.brd}`,borderRadius:"7px"}}>
                                  {l}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px",marginBottom:"10px"}}>
                          <div>
                            <div style={{fontSize:"10px",color:t.mut,fontWeight:600,marginBottom:"4px"}}>CATEGORY</div>
                            <select value={editForm.category} onChange={e=>setEditForm({...editForm,category:e.target.value})} style={inp}>
                              {EXP_CATS.map(c=><option key={c.id} value={c.id}>{c.icon} {c.label}</option>)}
                            </select>
                          </div>
                          <div>
                            <div style={{fontSize:"10px",color:t.mut,fontWeight:600,marginBottom:"4px"}}>NOTE</div>
                            <input value={editForm.note} onChange={e=>setEditForm({...editForm,note:e.target.value})} placeholder="Context or tag…" style={inp}/>
                          </div>
                        </div>
                        {/* Recurring + Tax deduction toggles side by side */}
                        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px",marginBottom:"12px"}}>
                          <div onClick={()=>setEditForm({...editForm,recurring:!editForm.recurring})} style={{display:"flex",alignItems:"center",justifyContent:"space-between",background:editForm.recurring?`${t.acc}10`:t.crd,border:`1.5px solid ${editForm.recurring?t.acc:t.brd}`,borderRadius:"10px",padding:"10px 12px",cursor:"pointer",transition:"all .2s"}}>
                            <div>
                              <div style={{fontSize:"12px",fontWeight:700,color:t.txt}}>🔁 Recurring</div>
                              {editForm.recurring&&<div style={{marginTop:"6px"}}><FreqPicker val={editForm.recurringFreq||"monthly"} onChange={v=>setEditForm({...editForm,recurringFreq:v})}/></div>}
                            </div>
                            <div style={{width:"34px",height:"19px",borderRadius:"10px",background:editForm.recurring?t.acc:t.fnt,position:"relative",flexShrink:0,marginLeft:"8px"}}>
                              <div style={{position:"absolute",top:"2px",left:editForm.recurring?"16px":"2px",width:"15px",height:"15px",borderRadius:"50%",background:"#fff",transition:"left .2s"}}/>
                            </div>
                          </div>
                          <div onClick={()=>setEditForm({...editForm,taxDeduction:!editForm.taxDeduction})} style={{display:"flex",alignItems:"center",justifyContent:"space-between",background:editForm.taxDeduction?`${t.acc}10`:t.crd,border:`1.5px solid ${editForm.taxDeduction?t.acc:t.brd}`,borderRadius:"10px",padding:"10px 12px",cursor:"pointer",transition:"all .2s"}}>
                            <div style={{fontSize:"12px",fontWeight:700,color:t.txt}}>🧾 Tax Deductible</div>
                            <div style={{width:"34px",height:"19px",borderRadius:"10px",background:editForm.taxDeduction?t.acc:t.fnt,position:"relative",flexShrink:0,marginLeft:"8px"}}>
                              <div style={{position:"absolute",top:"2px",left:editForm.taxDeduction?"16px":"2px",width:"15px",height:"15px",borderRadius:"50%",background:"#fff",transition:"left .2s"}}/>
                            </div>
                          </div>
                        </div>
                        <div style={{display:"flex",gap:"8px"}}>
                          <button className="btn" onClick={()=>saveEdit(e.id)} style={{background:t.acc,color:"#fff",padding:"9px 22px",fontSize:"13px",fontWeight:700,borderRadius:"8px"}}>Save ✓</button>
                          <button className="btn" onClick={cancelEdit} style={{background:"transparent",border:`1.5px solid ${t.brd}`,color:t.mut,padding:"9px 18px",fontSize:"13px",fontWeight:600,borderRadius:"8px"}}>Cancel</button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            }
          </div>

          {/* Footer */}
          {monthExp.length>0&&(
            <div style={{marginTop:"14px",padding:"12px 16px",background:t.inp,border:`1.5px solid ${t.brd}`,borderRadius:"10px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"8px"}}>
              <span style={{fontSize:"13px",color:t.mut}}>{monthExp.length} transactions</span>
              <div style={{display:"flex",gap:"16px"}}>
                <span style={{fontSize:"13px",color:t.wrn,fontWeight:700}}>Expenses: ${totalExpenses.toLocaleString()}</span>
                <span style={{fontSize:"13px",color:t.dan,fontWeight:700}}>Fees: ${totalFees.toLocaleString()}</span>
                <span style={{fontSize:"14px",color:t.txt,fontWeight:800}}>Total: ${totalOut.toLocaleString()}</span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ── VIEW: ADD EXPENSE ── */}
      {activeView==="add"&&(
        <div className={`fi ${animIn?"on":""}`} style={{background:t.crd,border:`1.5px solid ${t.cbrd}`,borderRadius:"16px",padding:"24px",transitionDelay:"0.1s"}}>
          <div style={{fontSize:"16px",fontWeight:700,color:t.txt,marginBottom:"20px"}}>Add New Expense</div>

          {/* Name + Amount + Type */}
          <div style={{display:"grid",gridTemplateColumns:w<600?"1fr":"2fr 1fr 1fr",gap:"12px",marginBottom:"14px"}}>
            <div>
              <div style={{fontSize:"11px",color:t.mut,fontWeight:600,marginBottom:"6px"}}>NAME</div>
              <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="e.g. Adobe Premiere, Stripe fees…" style={inp}/>
            </div>
            <div>
              <div style={{fontSize:"11px",color:t.mut,fontWeight:600,marginBottom:"6px"}}>AMOUNT ($)</div>
              <input value={form.amount} onChange={e=>setForm({...form,amount:e.target.value})} placeholder="0.00" type="number" style={inp}/>
            </div>
            <div>
              <div style={{fontSize:"11px",color:t.mut,fontWeight:600,marginBottom:"6px"}}>TYPE</div>
              <div style={{display:"flex",gap:"6px"}}>
                {[["expense","Expense"],["fee","Fee"]].map(([v,l])=>(
                  <button key={v} className="btn" onClick={()=>setForm({...form,type:v})} style={{flex:1,padding:"10px 4px",fontSize:"12px",fontWeight:600,background:form.type===v?t.txt:t.inp,color:form.type===v?t.bg:t.mut,border:`1.5px solid ${form.type===v?t.txt:t.brd}`,borderRadius:"8px"}}>
                    {l}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Category + Note */}
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px",marginBottom:"14px"}}>
            <div>
              <div style={{fontSize:"11px",color:t.mut,fontWeight:600,marginBottom:"6px"}}>CATEGORY</div>
              <select value={form.category} onChange={e=>setForm({...form,category:e.target.value})} style={inp}>
                {EXP_CATS.map(c=><option key={c.id} value={c.id}>{c.icon} {c.label}</option>)}
              </select>
            </div>
            <div>
              <div style={{fontSize:"11px",color:t.mut,fontWeight:600,marginBottom:"6px"}}>NOTE (optional)</div>
              <input value={form.note} onChange={e=>setForm({...form,note:e.target.value})} placeholder="Context or tag…" style={inp}/>
            </div>
          </div>

          {/* Recurring + Tax deduction */}
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px",marginBottom:"18px"}}>
            {/* Recurring */}
            <div style={{background:form.recurring?`${t.acc}10`:t.inp,border:`1.5px solid ${form.recurring?t.acc:t.brd}`,borderRadius:"12px",padding:"14px",transition:"all .2s"}}>
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:form.recurring?"12px":"0"}}>
                <div>
                  <div style={{fontSize:"13px",fontWeight:700,color:t.txt}}>🔁 Recurring</div>
                  <div style={{fontSize:"11px",color:t.mut}}>Auto-adds each period</div>
                </div>
                <button className="btn" onClick={()=>setForm({...form,recurring:!form.recurring})} style={{padding:"6px 14px",fontSize:"12px",fontWeight:700,background:form.recurring?t.acc:"transparent",color:form.recurring?"#fff":t.mut,border:`1.5px solid ${form.recurring?t.acc:t.brd}`,borderRadius:"7px"}}>
                  {form.recurring?"✓ On":"Off"}
                </button>
              </div>
              {form.recurring&&(
                <div>
                  <div style={{fontSize:"10px",color:t.mut,fontWeight:600,marginBottom:"6px"}}>FREQUENCY</div>
                  <FreqPicker val={form.recurringFreq} onChange={v=>setForm({...form,recurringFreq:v})}/>
                  <div style={{marginTop:"6px",fontSize:"11px",color:t.acc}}>
                    {form.recurringFreq==="monthly"&&"Every month"}
                    {form.recurringFreq==="quarterly"&&"Every 3 months"}
                    {form.recurringFreq==="yearly"&&"Once per year"}
                  </div>
                </div>
              )}
            </div>

            {/* Tax deduction */}
            <div onClick={()=>setForm({...form,taxDeduction:!form.taxDeduction})} style={{display:"flex",flexDirection:"column",justifyContent:"center",background:form.taxDeduction?`${t.acc}10`:t.inp,border:`1.5px solid ${form.taxDeduction?t.acc:t.brd}`,borderRadius:"12px",padding:"14px",cursor:"pointer",transition:"all .2s"}}>
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"6px"}}>
                <div style={{fontSize:"13px",fontWeight:700,color:t.txt}}>🧾 Tax Deductible</div>
                <div style={{width:"36px",height:"20px",borderRadius:"10px",background:form.taxDeduction?t.acc:t.fnt,transition:"background .2s",position:"relative",flexShrink:0}}>
                  <div style={{position:"absolute",top:"3px",left:form.taxDeduction?"18px":"3px",width:"14px",height:"14px",borderRadius:"50%",background:"#fff",transition:"left .2s"}}/>
                </div>
              </div>
              <div style={{fontSize:"11px",color:t.mut}}>Auto-flows into Tax Estimator</div>
            </div>
          </div>

          {/* Submit */}
          <div style={{display:"flex",gap:"10px"}}>
            <button className="btn" onClick={addExpense} disabled={!form.name||!form.amount} style={{background:(form.name&&form.amount)?t.acc:"#444",color:"#fff",padding:"12px 32px",fontSize:"14px",fontWeight:700,borderRadius:"10px"}}>
              Add Expense →
            </button>
            <button className="btn" onClick={()=>{setForm(BLANK);setActiveView("overview");}} style={{background:"transparent",border:`1.5px solid ${t.brd}`,color:t.mut,padding:"12px 20px",fontSize:"13px",fontWeight:600,borderRadius:"10px"}}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}


// ─── PRICING TAB ─────────────────────────────────────────────────────────────
function PricingTab({dark,currentPlan,onUpgrade,authUser,t}){
  const w=useW();
  const [animIn,setAnimIn]=useState(false);
  const [billing,setBilling]=useState("monthly"); // monthly | yearly
  useEffect(()=>{setTimeout(()=>setAnimIn(true),60);},[]);

  const yearlyDiscount=0.2; // 20% off yearly

  const tiers=[
    {
      id:"free",
      name:"Free",
      icon:"🌱",
      price:{monthly:0, yearly:0},
      color:"#60607a",
      desc:"Perfect for creators just starting out",
      features:[
        "Track 1 income platform",
        "Full expense tracking",
        "Live tax estimator",
        "Dashboard & yearly charts",
        "CSV export",
        "Secure cloud data sync",
      ],
      cta:"Current Plan",
      highlight:false,
    },
    {
      id:"pro",
      name:"Gold",
      icon:"⭐",
      price:{monthly:12, yearly:9},
      color:"#f5a623",
      desc:"For creators with multiple income streams",
      features:[
        "Everything in Free",
        "Track up to 5 platforms",
        "Smart Import (screenshots & CSV)",
        "Recurring expense automation",
        "Tax deduction tracking",
        "Priority support",
      ],
      cta:"Upgrade to Gold",
      highlight:true,
    },
    {
      id:"business",
      name:"Platinum",
      icon:"💎",
      price:{monthly:29, yearly:22},
      color:"#a259ff",
      desc:"For full-time creators & agencies",
      features:[
        "Everything in Gold",
        "Unlimited platforms",
        "Multi-year analytics",
        "Quarterly tax payment reminders",
        "Early access to new features",
        "Dedicated support",
      ],
      cta:"Upgrade to Platinum",
      highlight:false,
    },
  ];

  const currentP=PLANS[currentPlan]||PLANS.free;

  return(
    <div style={{maxWidth:"960px",margin:"0 auto"}}>
      {/* Header */}
      <div className={`fi ${animIn?"on":""}`} style={{textAlign:"center",marginBottom:"40px"}}>
        <div style={{display:"inline-flex",alignItems:"center",gap:"8px",background:`${t.acc}18`,border:`1.5px solid ${t.acc}44`,padding:"7px 18px",borderRadius:"100px",fontSize:"13px",fontWeight:700,color:t.acc,marginBottom:"20px"}}>
          ✦ Simple, creator-friendly pricing
        </div>
        <div style={{fontFamily:"'Outfit',sans-serif",fontSize:w<600?"32px":"48px",fontWeight:800,color:t.txt,marginBottom:"12px",lineHeight:1.1}}>
          Pricing that grows<br/>with your income
        </div>
        <p style={{fontSize:"16px",color:t.mut,maxWidth:"500px",margin:"0 auto 24px",lineHeight:1.7}}>
          Start free and upgrade when you need more. No hidden fees, cancel anytime.
        </p>
        {/* Billing toggle */}
        <div style={{display:"inline-flex",background:t.inp,borderRadius:"10px",padding:"4px",border:`1.5px solid ${t.brd}`,gap:"4px"}}>
          {[["monthly","Monthly"],["yearly","Yearly · 20% off"]].map(([v,l])=>(
            <button key={v} className="btn" onClick={()=>setBilling(v)} style={{padding:"8px 20px",fontSize:"13px",fontWeight:600,background:billing===v?t.crd:"transparent",color:billing===v?t.txt:t.mut,borderRadius:"7px",border:billing===v?`1.5px solid ${t.brd}`:"none"}}>
              {l}
            </button>
          ))}
        </div>
      </div>

      {/* Plan cards */}
      <div style={{display:"grid",gridTemplateColumns:w<700?"1fr":w<1000?"1fr 1fr":"repeat(3,1fr)",gap:"16px",marginBottom:"48px"}}>
        {tiers.map((tier,i)=>{
          const isCurrent=currentPlan===tier.id;
          const price=billing==="yearly"?tier.price.yearly:tier.price.monthly;
          return(
            <div key={tier.id} className={`fi card ${animIn?"on":""}`} style={{
              background:tier.id==="business"?`linear-gradient(135deg,#e8e8f022,#c0b8d008)`:tier.highlight?`linear-gradient(135deg,${tier.color}18,${tier.color}06)`:t.crd,
              border:`2px solid ${isCurrent?tier.color:tier.highlight?tier.color+"66":t.cbrd}`,
              borderRadius:"20px",padding:"28px 24px",
              transitionDelay:`${i*.08}s`,
              position:"relative",overflow:"hidden",
            }}>
              {tier.highlight&&(
                <div style={{position:"absolute",top:"16px",right:"16px",background:`linear-gradient(135deg,${tier.color},#00a87a)`,color:"#fff",fontSize:"11px",fontWeight:800,padding:"4px 12px",borderRadius:"100px",letterSpacing:"0.5px"}}>
                  MOST POPULAR
                </div>
              )}
              {isCurrent&&(
                <div style={{position:"absolute",top:"16px",right:"16px",background:t.inp,border:`1.5px solid ${t.brd}`,color:t.mut,fontSize:"11px",fontWeight:700,padding:"4px 12px",borderRadius:"100px"}}>
                  CURRENT PLAN
                </div>
              )}
              <div style={{fontSize:"28px",marginBottom:"12px"}}>{tier.icon}</div>
              <div style={{fontFamily:"'Outfit',sans-serif",fontSize:"22px",fontWeight:800,color:t.txt,marginBottom:"4px"}}>{tier.name}</div>
              <div style={{fontSize:"13px",color:t.mut,marginBottom:"20px"}}>{tier.desc}</div>
              <div style={{display:"flex",alignItems:"baseline",gap:"4px",marginBottom:"24px"}}>
                <span style={{fontFamily:"'Outfit',sans-serif",fontSize:"42px",fontWeight:800,color:price===0?t.mut:tier.color,lineHeight:1}}>
                  {price===0?"Free":`$${price}`}
                </span>
                {price>0&&<span style={{fontSize:"14px",color:t.mut,fontWeight:500}}>/mo{billing==="yearly"?" billed yearly":""}</span>}
              </div>
              <button className="btn" onClick={()=>!isCurrent&&onUpgrade(tier.id)} style={{
                width:"100%",padding:"13px",fontSize:"14px",fontWeight:700,borderRadius:"12px",marginBottom:"24px",
                background:isCurrent?"transparent":tier.highlight?`linear-gradient(135deg,${tier.color},#00a87a)`:t.inp,
                color:isCurrent?t.mut:tier.highlight?"#fff":t.txt,
                border:isCurrent?`1.5px solid ${t.brd}`:tier.highlight?"none":`1.5px solid ${t.brd}`,
                cursor:isCurrent?"default":"pointer",
                boxShadow:tier.highlight&&!isCurrent?`0 8px 24px ${tier.color}44`:"none",
              }}>
                {isCurrent?"✓ "+tier.cta.replace("Upgrade to ",""):!authUser?"Sign Up Free →":tier.id==="free"?"Current Plan":tier.cta+" →"}
              </button>
              <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
                {tier.features.map(f=>(
                  <div key={f} style={{display:"flex",alignItems:"center",gap:"10px"}}>
                    <div style={{width:"18px",height:"18px",borderRadius:"50%",background:`${tier.color}22`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontSize:"10px",color:tier.color,fontWeight:700}}>✓</div>
                    <span style={{fontSize:"13px",color:t.mut,lineHeight:1.4}}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* FAQ */}
      <div className={`fi ${animIn?"on":""}`} style={{background:t.crd,border:`1.5px solid ${t.cbrd}`,borderRadius:"20px",padding:"32px",transitionDelay:"0.3s"}}>
        <div style={{fontFamily:"'Outfit',sans-serif",fontSize:"22px",fontWeight:800,color:t.txt,marginBottom:"24px",textAlign:"center"}}>Common Questions</div>
        <div style={{display:"grid",gridTemplateColumns:w<700?"1fr":"1fr 1fr",gap:"24px"}}>
          {[
            ["Can I switch plans anytime?","Yes — upgrade or downgrade whenever you want. If you downgrade, you keep your data but the platform limit applies to new entries."],
            ["What counts as a 'platform'?","Each unique income source counts — YouTube, Patreon, Sponsorship, Merch, etc. Affiliate links from the same platform count as one."],
            ["Is my data safe?","Your data is stored in Supabase (enterprise-grade Postgres) with row-level security. Only you can see your data."],
            ["When does payment start?","Payment isn't live yet — we're building the payment flow. Sign up now and you'll get early access pricing when it launches."],
          ].map(([q,a])=>(
            <div key={q}>
              <div style={{fontSize:"14px",fontWeight:700,color:t.txt,marginBottom:"6px"}}>{q}</div>
              <div style={{fontSize:"13px",color:t.mut,lineHeight:1.7}}>{a}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── APP ROOT ─────────────────────────────────────────────────────────────────
export default function App(){
  const [dark,setDark]=useState(true);
  const [page,setPage]=useState("landing");
  const [tab,setTab]=useState("overview");
  const [entries,setEntries]=useState([]);
  const [selMonth,setSelMonth]=useState(new Date().getMonth());
  const SEL_YEAR=2026;
  const [animIn,setAnimIn]=useState(false);
  const [importCount,setImportCount]=useState(0);
  const [userProfile,setUserProfile]=useState({name:"",state:"",filingStatus:"single"});
  const [expenses,setExpenses]=useState([]);
  const [authUser,setAuthUser]=useState(null);      // real Supabase auth user
  const [plan,setPlan]=useState("free");               // free | pro | business
  const [loading,setLoading]=useState(true);         // true while checking auth + loading data
  const [dbError,setDbError]=useState(null);         // surface any load errors

  const t=T(dark);
  const w=useW();

  // ── On mount: check if user is already logged in ──────────────────────────
  useEffect(()=>{
    // Get current session
    supabase.auth.getSession().then(({data:{session}})=>{
      if(session?.user){
        setAuthUser(session.user);
        loadUserData(session.user.id);
      } else {
        setLoading(false);
      }
    });
    // Listen for auth changes (login, logout)
    const {data:{subscription}}=supabase.auth.onAuthStateChange((_event,session)=>{
      if(session?.user){
        setAuthUser(session.user);
        setPage("app");
        loadUserData(session.user.id);
      } else {
        setAuthUser(null);
        setEntries([]);
        setExpenses([]);
        setUserProfile({name:"",state:"",filingStatus:"single"});
        setPage("landing");
        setLoading(false);
      }
    });
    return ()=>subscription.unsubscribe();
  },[]);

  useEffect(()=>{setTimeout(()=>setAnimIn(true),60);},[]);

  // ── Load all user data from Supabase ──────────────────────────────────────
  async function loadUserData(uid){
    setLoading(true);
    try{
      const {data:prof}=await supabase.from("profiles").select("*").eq("id",uid).single();
      if(prof) setUserProfile({name:prof.name||"",state:prof.state||"",filingStatus:prof.filing_status||"single"});
      const {data:ents}=await supabase.from("entries").select("*").eq("user_id",uid).order("created_at",{ascending:false});
      setEntries((ents||[]).map(e=>({...e,amount:Number(e.amount),note:e.note||""})));
      const {data:exps}=await supabase.from("expenses").select("*").eq("user_id",uid).order("created_at",{ascending:false});
      setExpenses((exps||[]).map(x=>({...x,amount:Number(x.amount),recurring:x.recurring||false,recurringFreq:x.recurring_freq||null,recurringStart:x.recurring_start||null,taxDeduction:x.tax_deduction||false})));
    }catch(err){
      console.error("Load error:",err);
    }finally{
      setPage("app");
      setLoading(false);
    }
  }

  // ── Auth: sign up ─────────────────────────────────────────────────────────
  async function handleSignUp({name,email,password,state,filingStatus}){
    const {data,error}=await supabase.auth.signUp({
      email,password,
      options:{data:{name}},
    });
    if(error) return{error:error.message};
    if(data.user){
      // Small delay so the DB trigger fires first, then we overwrite with full profile
      await new Promise(r=>setTimeout(r,500));
      await supabase.from("profiles").upsert({
        id:data.user.id,
        name,
        state,
        filing_status:filingStatus,
      });
      setAuthUser(data.user);
      setUserProfile({name,state,filingStatus});
      setEntries([]);
      setExpenses([]);
      setPage("app");
      setLoading(false);
    }
    return{};
  }

  // ── Auth: log in ──────────────────────────────────────────────────────────
  async function handleLogin({email,password}){
    const {error}=await supabase.auth.signInWithPassword({email,password});
    if(error) return{error:error.message};
    return{};
  }

  // ── Auth: log out ─────────────────────────────────────────────────────────
  async function handleLogout(){
    await supabase.auth.signOut();
  }

  // ── Auth: guest (no account, uses seed data) ──────────────────────────────
  function handleGuest(){
    setEntries(SEED);
    setExpenses(SEED_EXPENSES);
    setUserProfile({name:"Guest",state:"",filingStatus:"single"});
    setPage("app");
  }

  // ── Add income entry ──────────────────────────────────────────────────────
  async function addEntry(entry){
    if(authUser){
      const {data,error}=await supabase.from("entries").insert({
        user_id:authUser.id,
        platform:entry.platform,
        amount:entry.amount,
        month:entry.month,
        year:entry.year,
        note:entry.note||"",
      }).select().single();
      if(!error&&data) setEntries(p=>[{...entry,id:data.id},...p]);
    } else {
      setEntries(p=>[entry,...p]);
    }
    setImportCount(c=>c+1);
  }

  // ── Delete income entry ───────────────────────────────────────────────────
  async function deleteEntry(id){
    if(authUser) await supabase.from("entries").delete().eq("id",id);
    setEntries(p=>p.filter(e=>e.id!==id));
  }

  // ── Add expense ───────────────────────────────────────────────────────────
  async function addExpense(exp){
    if(authUser){
      const {data,error}=await supabase.from("expenses").insert({
        user_id:authUser.id,
        name:exp.name,
        amount:exp.amount,
        category:exp.category,
        type:exp.type,
        date:exp.date,
        note:exp.note||"",
        recurring:exp.recurring||false,
        recurring_freq:exp.recurringFreq||null,
        recurring_start:exp.recurringStart||null,
        tax_deduction:exp.taxDeduction||false,
      }).select().single();
      if(!error&&data) setExpenses(p=>[{...exp,id:data.id},...p]);
    } else {
      setExpenses(p=>[exp,...p]);
    }
  }

  // ── Update expense ────────────────────────────────────────────────────────
  async function updateExpense(id,changes){
    if(authUser){
      await supabase.from("expenses").update({
        name:changes.name,
        amount:changes.amount,
        category:changes.category,
        type:changes.type,
        note:changes.note||"",
        recurring:changes.recurring||false,
        recurring_freq:changes.recurringFreq||null,
        tax_deduction:changes.taxDeduction||false,
      }).eq("id",id);
    }
    setExpenses(p=>p.map(e=>e.id===id?{...e,...changes}:e));
  }

  // ── Delete expense ────────────────────────────────────────────────────────
  async function deleteExpense(id){
    if(authUser) await supabase.from("expenses").delete().eq("id",id);
    setExpenses(p=>p.filter(e=>e.id!==id));
  }

  // ── Update profile ────────────────────────────────────────────────────────
  async function updateProfile(changes){
    const updated={...userProfile,...changes};
    setUserProfile(updated);
    if(authUser){
      await supabase.from("profiles").upsert({
        id:authUser.id,
        name:updated.name,
        state:updated.state,
        filing_status:updated.filingStatus,
      });
    }
  }

  // ── Handle import (Smart Import tab) ─────────────────────────────────────
  async function handleImport(entry){
    await addEntry(entry);
  }

  const TABS=[
    {id:"overview", label:"Dashboard"},
    {id:"monthly",  label:"Monthly Breakdown"},
    {id:"expenses", label:"Expenses & Fees"},
    {id:"taxes",    label:"Tax Estimator"},
    {id:"import",   label:importCount>0?`Smart Import · ${importCount}`:"Smart Import"},
    {id:"pricing",  label:"⚡ Plans"},
  ];

  // ── Full-screen loading spinner ───────────────────────────────────────────
  if(loading) return(
    <div style={{minHeight:"100vh",background:"#08080f",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"20px"}}>
      <GlobalCSS dark={true}/>
      <svg width="52" height="52" viewBox="0 0 44 44" fill="none"><rect width="44" height="44" rx="12" fill="url(#ldgrad)"/><defs><linearGradient id="ldgrad" x1="0" y1="0" x2="44" y2="44"><stop offset="0%" stopColor="#00D4A0"/><stop offset="100%" stopColor="#5B6BFF"/></linearGradient></defs><rect x="9" y="28" width="6" height="8" rx="2" fill="white" fillOpacity="0.55"/><rect x="19" y="21" width="6" height="15" rx="2" fill="white" fillOpacity="0.8"/><rect x="29" y="13" width="6" height="23" rx="2" fill="white"/><path d="M32 10 L32 6" stroke="white" strokeWidth="2" strokeLinecap="round"/><path d="M30 8 L32 6 L34 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
      <div style={{fontFamily:"'Outfit',sans-serif",fontSize:"22px",fontWeight:800,color:"#edeae0"}}>CreatorFlow</div>
      <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
        <span className="sp" style={{fontSize:"18px",color:"#00d4a0"}}>⚙</span>
        <span style={{fontSize:"14px",color:"#60607a",fontFamily:"'Plus Jakarta Sans',sans-serif"}}>Loading your data…</span>
      </div>
      {dbError&&<div style={{fontSize:"13px",color:"#ff4455",background:"#1a0a0c",padding:"10px 20px",borderRadius:"10px",border:"1.5px solid #ff445544"}}>{dbError}</div>}
    </div>
  );

  // ── Landing ──
  if(page==="landing") return(
    <>
      <GlobalCSS dark={dark}/>
      <div style={{position:"fixed",top:0,left:0,right:0,zIndex:100,background:`${t.bg}f0`,borderBottom:`1px solid ${t.brd}`,backdropFilter:"blur(14px)"}}>
        <div style={{maxWidth:"1000px",margin:"0 auto",padding:"14px 32px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <div style={{display:"flex",alignItems:"center",gap:"10px",cursor:"pointer"}} onClick={()=>setPage("landing")}>
            <div style={{width:"36px",height:"36px",borderRadius:"10px",background:`linear-gradient(135deg,${t.acc},#7b8cff)`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><svg width="36" height="36" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="44" height="44" rx="12" fill="url(#cfgradnav)"/><defs><linearGradient id="cfgradnav" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse"><stop offset="0%" stopColor="#00D4A0"/><stop offset="100%" stopColor="#5B6BFF"/></linearGradient></defs><rect x="9" y="28" width="6" height="8" rx="2" fill="white" fillOpacity="0.55"/><rect x="19" y="21" width="6" height="15" rx="2" fill="white" fillOpacity="0.8"/><rect x="29" y="13" width="6" height="23" rx="2" fill="white"/><path d="M32 10 L32 6" stroke="white" strokeWidth="2" strokeLinecap="round"/><path d="M30 8 L32 6 L34 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg></div>
            <span style={{fontFamily:"'Outfit',sans-serif",fontSize:"20px",fontWeight:800,color:t.txt}}>CreatorFlow</span>
          </div>
          <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
            <button className="btn" onClick={()=>setDark(d=>!d)} style={{background:t.crd,border:`1.5px solid ${t.brd}`,color:t.mut,padding:"8px 16px",fontSize:"13px",fontWeight:600,borderRadius:"10px"}}>{dark?"☀ Light":"◑ Dark"}</button>
            <button className="btn" onClick={()=>setPage("pricing")} style={{background:"transparent",border:"none",color:t.mut,padding:"8px 16px",fontSize:"13px",fontWeight:600,borderRadius:"10px"}}>Pricing</button>
            <button className="btn" onClick={()=>setPage("login")} style={{background:t.crd,border:`1.5px solid ${t.brd}`,color:t.txt,padding:"8px 18px",fontSize:"13px",fontWeight:600,borderRadius:"10px"}}>Log In</button>
            <button className="btn" onClick={()=>setPage("login")} style={{background:`linear-gradient(135deg,${t.acc},#00a87a)`,color:"#fff",padding:"9px 20px",fontSize:"13px",fontWeight:700,borderRadius:"10px",boxShadow:`0 4px 16px ${t.glo}`}}>Get Started →</button>
          </div>
        </div>
      </div>
      <div style={{paddingTop:"64px"}}><LandingPage dark={dark} onEnter={()=>setPage("login")} t={t}/></div>
    </>
  );

  // ── Pricing page (standalone) ──
  if(page==="pricing") return(
    <>
      <GlobalCSS dark={dark}/>
      <div style={{position:"fixed",top:0,left:0,right:0,zIndex:100,background:`${t.bg}f0`,borderBottom:`1px solid ${t.brd}`,backdropFilter:"blur(14px)"}}>
        <div style={{maxWidth:"1000px",margin:"0 auto",padding:"14px 32px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <div style={{display:"flex",alignItems:"center",gap:"10px",cursor:"pointer"}} onClick={()=>setPage("landing")}>
            <span style={{fontFamily:"'Outfit',sans-serif",fontSize:"20px",fontWeight:800,color:t.txt}}>CreatorFlow</span>
          </div>
          <div style={{display:"flex",gap:"10px"}}>
            <button className="btn" onClick={()=>setPage("landing")} style={{background:t.crd,border:`1.5px solid ${t.brd}`,color:t.mut,padding:"8px 16px",fontSize:"13px",fontWeight:600,borderRadius:"10px"}}>← Back</button>
            <button className="btn" onClick={()=>setPage("login")} style={{background:`linear-gradient(135deg,${t.acc},#00a87a)`,color:"#fff",padding:"9px 20px",fontSize:"13px",fontWeight:700,borderRadius:"10px"}}>Get Started →</button>
          </div>
        </div>
      </div>
      <div style={{paddingTop:"80px",paddingBottom:"60px",minHeight:"100vh",background:t.bg,color:t.txt}}>
        <GlobalCSS dark={dark}/>
        <div style={{padding:"0 24px"}}>
          <PricingTab dark={dark} currentPlan="free" onUpgrade={()=>setPage("login")} authUser={null} t={t}/>
        </div>
      </div>
    </>
  );

  // ── Login ──
  if(page==="login") return(
    <>
      <GlobalCSS dark={dark}/>
      <div style={{position:"fixed",top:14,right:14,zIndex:100,display:"flex",gap:"8px"}}>
        <button className="btn" onClick={()=>setDark(d=>!d)} style={{background:t.crd,border:`1.5px solid ${t.brd}`,color:t.mut,padding:"8px 14px",fontSize:"13px",fontWeight:600,borderRadius:"10px"}}>{dark?"☀ Light":"◑ Dark"}</button>
        <button className="btn" onClick={()=>setPage("landing")} style={{background:t.crd,border:`1.5px solid ${t.brd}`,color:t.mut,padding:"8px 14px",fontSize:"13px",fontWeight:600,borderRadius:"10px"}}>← Back</button>
      </div>
      <LoginPage dark={dark} onLogin={handleLogin} onSignUp={handleSignUp} onGuest={handleGuest} t={t}/>
    </>
  );

  // ── Main App ──
  return(
    <div style={{minHeight:"100vh",background:t.bg,color:t.txt}}>
      <GlobalCSS dark={dark}/>

      {/* Header */}
      <div style={{borderBottom:`1px solid ${t.brd}`,padding:w<600?"10px 16px":"14px 36px",display:"flex",alignItems:"center",justifyContent:"space-between",background:t.nav,position:"sticky",top:0,zIndex:50,backdropFilter:"blur(14px)"}}>
        <div style={{display:"flex",alignItems:"center",gap:"10px",cursor:"pointer"}} onClick={()=>setPage("landing")}>
          <div style={{width:"38px",height:"38px",borderRadius:"11px",background:`linear-gradient(135deg,${t.acc},#7b8cff)`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><svg width="38" height="38" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="44" height="44" rx="12" fill="url(#cfgradapp)"/><defs><linearGradient id="cfgradapp" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse"><stop offset="0%" stopColor="#00D4A0"/><stop offset="100%" stopColor="#5B6BFF"/></linearGradient></defs><rect x="9" y="28" width="6" height="8" rx="2" fill="white" fillOpacity="0.55"/><rect x="19" y="21" width="6" height="15" rx="2" fill="white" fillOpacity="0.8"/><rect x="29" y="13" width="6" height="23" rx="2" fill="white"/><path d="M32 10 L32 6" stroke="white" strokeWidth="2" strokeLinecap="round"/><path d="M30 8 L32 6 L34 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg></div>
          <div>
            <div style={{fontFamily:"'Outfit',sans-serif",fontSize:"18px",fontWeight:800,color:t.txt,lineHeight:1.1}}>CreatorFlow</div>
            <div style={{fontSize:"11px",color:t.mut,fontWeight:500,lineHeight:1.1,marginTop:"1px"}}>Income Tracker</div>
          </div>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
          {/* Plan badge — clickable */}
          {authUser&&(
            <div onClick={()=>setTab("pricing")} style={{cursor:"pointer",background:PLANS[plan].color+"22",border:`1.5px solid ${PLANS[plan].color}44`,padding:"5px 11px",borderRadius:"7px"}}>
              <span style={{fontSize:"11px",fontWeight:800,color:PLANS[plan].color,letterSpacing:"0.5px"}}>{PLANS[plan].badge}</span>
            </div>
          )}
          {/* Avatar + name — compact */}
          {userProfile.name&&userProfile.name!=="Guest"&&(
            <div style={{display:"flex",alignItems:"center",gap:"7px",background:t.inp,border:`1.5px solid ${t.brd}`,padding:"6px 12px",borderRadius:"10px"}}>
              <div style={{width:"24px",height:"24px",borderRadius:"7px",background:`linear-gradient(135deg,${t.acc},#7b8cff)`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"12px",fontWeight:800,color:"#fff",flexShrink:0}}>
                {userProfile.name[0]?.toUpperCase()}
              </div>
              <div>
                <div style={{fontSize:"13px",fontWeight:600,color:t.txt}}>{userProfile.name}</div>
                {userProfile.state&&<div style={{fontSize:"11px",color:t.mut,marginTop:"1px"}}>{userProfile.state}</div>}
              </div>
            </div>
          )}
          {/* Dark mode */}
          <button className="btn" onClick={()=>setDark(d=>!d)} style={{background:t.inp,border:`1.5px solid ${t.brd}`,color:t.mut,padding:"8px 12px",fontSize:"13px",borderRadius:"10px"}}>{dark?"☀":"◑"}</button>
          {/* Log out / Log in */}
          {authUser
            ?<button className="btn" onClick={handleLogout} style={{background:t.inp,border:`1.5px solid ${t.brd}`,color:t.mut,padding:"8px 14px",fontSize:"13px",fontWeight:600,borderRadius:"10px"}}>Log Out</button>
            :<button className="btn" onClick={()=>setPage("login")} style={{background:`linear-gradient(135deg,${t.acc},#00a87a)`,color:"#fff",padding:"8px 16px",fontSize:"13px",fontWeight:700,borderRadius:"10px"}}>Log In</button>
          }
        </div>
      </div>

      {/* Nav */}
      <div style={{borderBottom:`1px solid ${t.brd}`,padding:w<600?"0 8px":"0 36px",display:"flex",background:t.nav,overflowX:"auto",WebkitOverflowScrolling:"touch"}}>
        {TABS.map(tb=>{
          const isImp=tb.id==="import"&&importCount>0, isAct=tab===tb.id;
          return(
            <button key={tb.id} className="nb" onClick={()=>setTab(tb.id)} style={{
              padding:w<600?"12px 14px":"16px 22px",fontSize:w<600?"12px":"14px",whiteSpace:"nowrap",
              fontWeight:isAct?700:500,
              color:isImp?(isAct?t.acc:`${t.acc}88`):(isAct?t.txt:t.mut),
              borderBottom:`3px solid ${isAct?t.acc:"transparent"}`,
              marginBottom:"-1px",
            }}>
              {tb.label}
            </button>
          );
        })}
      </div>

      {/* Guest banner */}
      {!authUser&&(
        <div style={{background:`linear-gradient(90deg,#7b8cff22,#00d4a022)`,borderBottom:`1px solid #7b8cff44`,padding:w<600?"10px 14px":"10px 36px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"10px"}}>
          <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
            <span style={{fontSize:"16px"}}>👋</span>
            <span style={{fontSize:"13px",color:t.txt,fontWeight:500}}>You're in guest mode — <strong>data won't be saved</strong> when you close the tab.</span>
          </div>
          <button className="btn" onClick={()=>setPage("login")} style={{background:`linear-gradient(135deg,${t.acc},#00a87a)`,color:"#fff",padding:"8px 20px",fontSize:"13px",fontWeight:700,borderRadius:"8px"}}>Create Free Account →</button>
        </div>
      )}

      {/* Content */}
      <div style={{padding:w<600?"16px 14px":"36px 40px",maxWidth:"1200px",margin:"0 auto"}}>
        {tab==="overview" &&<YearOverviewTab entries={entries} dark={dark} userProfile={userProfile}/>}
        {tab==="monthly"  &&<MonthlyDetailTab entries={entries} setEntries={setEntries} dark={dark} selMonth={selMonth} setSelMonth={setSelMonth} selYear={SEL_YEAR} userProfile={userProfile} addEntry={addEntry} deleteEntry={deleteEntry} plan={plan} onUpgrade={()=>setTab("pricing")}/>}
        {tab==="expenses" &&<ExpensesTab entries={entries} dark={dark} selMonth={selMonth} selYear={SEL_YEAR} expenses={expenses} setExpenses={setExpenses} addExpense={addExpense} updateExpense={updateExpense} deleteExpense={deleteExpense}/>}
        {tab==="taxes"    &&<TaxTab entries={entries} dark={dark} userProfile={userProfile} onUpdateProfile={updateProfile} expenseDeductions={expenses.filter(e=>e.taxDeduction).reduce((s,e)=>s+e.amount,0)} expenseDedCount={expenses.filter(e=>e.taxDeduction).length}/>}
        {tab==="import"   &&<ImportTab onImport={handleImport} selMonth={selMonth} selYear={SEL_YEAR} t={t} dark={dark}/>}
        {tab==="pricing"  &&<PricingTab dark={dark} currentPlan={plan} onUpgrade={p=>setPlan(p)} authUser={authUser} t={t}/>}

        {importCount>0&&tab==="import"&&(
          <div className="su" style={{marginTop:"20px",background:t.successBg,border:`1.5px solid ${t.acc}55`,borderRadius:"14px",padding:"14px 20px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <span style={{fontSize:"15px",fontWeight:600,color:t.acc}}>✓ {importCount} entr{importCount===1?"y":"ies"} added to your dashboard</span>
            <button className="btn" onClick={()=>setTab("overview")} style={{background:t.acc,color:"#fff",padding:"9px 20px",fontSize:"13px",fontWeight:700,borderRadius:"10px"}}>View Dashboard →</button>
          </div>
        )}

        <div style={{marginTop:"48px",textAlign:"center",fontSize:"13px",color:t.fnt,fontWeight:500}}>
          CreatorFlow — Your money, clearly — {SEL_YEAR}
        </div>
      </div>
    </div>
  );
}
