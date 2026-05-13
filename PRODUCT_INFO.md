# Minara - Product Information

> Complete product features, use cases, and technical details

---

## What is Minara?

Minara is a **cloud-based digital signage SaaS** that transforms any TV or display screen into a smart, always-updated notice board.

### How It Works

```
┌──────────────────┐    ┌──────────────────┐    ┌──────────────────┐
│   ADMIN PANEL    │───▶│   CLOUD SERVER   │───▶│   TV/DISPLAY     │
│  (Dashboard)     │    │   (Processing)   │    │  (Browser View)  │
└──────────────────┘    └──────────────────┘    └──────────────────┘
     You manage            We process           Audience sees
```

1. **Customer signs up** → Gets dashboard access
2. **Customizes everything** → Colors, logo, content
3. **Gets unique URL** → xyz.minara.io/display
4. **Opens URL on TV** → Full-screen browser mode
5. **Auto-updates** → Content changes in real-time

---

## Problems We Solve

### Traditional Methods & Their Problems

| Method | Problem |
|--------|---------|
| **Paper Posters** | Gets old, tears, fades, needs manual replacement |
| **Whiteboards** | Limited space, messy handwriting, manual updates |
| **Mic Announcements** | Only reaches people present at that moment |
| **Small Notice Boards** | Limited space, cluttered, often ignored |
| **Scattered Information** | Info everywhere - confusing for audience |

### Minara Solution

| Feature | Benefit |
|---------|---------|
| **Digital Display** | Always clean, professional, visible |
| **Cloud-based** | Update from anywhere, anytime |
| **Auto-refresh** | Content always current (60-second refresh) |
| **Centralized** | All information in one place |
| **Scalable** | One screen or hundred - same effort |

---

## Screen Layout Structure

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  [LOGO]  Organization Name          8:37 AM  Mon, May 11   │  HEADER
│                                     ١٤٤٧ ذوالقعدة ٢٦        │  (10%)
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  FAJR    DHUHR     ASR     MAGHRIB    ISHA    NEXT PRAYER  │  PRAYER
│  3:15    12:55    5:03     8:34      10:36    Dhuhr 4h 17m │  STRIP
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                      🟢 LIVE NOW                            │
│                                                             │
│              Licensed Day Care                              │  MAIN
│                                                             │  CONTENT
│           📍 2nd Floor  🕐 1:00 PM - 11:00 PM               │  (70%)
│                                                             │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  ◀◀◀ SCROLLING TICKER: Upcoming events, news, alerts ▶▶▶   │  ADS/TICKER
│                                                             │  (10%)
├─────────────────────────────────────────────────────────────┤
│  COMING UP TODAY                    Powered by Minara      │  FOOTER
│  • Event 1  • Event 2  • Event 3                           │  (10%)
└─────────────────────────────────────────────────────────────┘
```

### Layout Breakdown

| Section | Percentage | Content |
|---------|------------|---------|
| Header | 10% | Logo, name, time, date (Gregorian + Hijri) |
| Prayer Strip | Variable | Prayer times with Adhan & Jamaat |
| Main Content | 70% | Current/upcoming events, announcements |
| Ticker/Ads | 10% | Scrolling text, sponsor ads |
| Footer | 10% | Upcoming events, branding (FIXED) |

---

## Core Features

### 1. Real-time Content Management
- Dashboard to add/edit/delete content
- Changes reflect immediately on display
- Schedule content in advance
- Set start/end dates for announcements

### 2. Prayer Times (Mosque Feature)
- Automatic prayer time calculation
- Location-based accuracy
- Adhan & Jamaat times
- Next prayer countdown
- Hijri calendar date

### 3. Event Management
- Add unlimited events
- "LIVE NOW" indicator for ongoing events
- "COMING UP" section for future events
- Event details: title, location, time, description

### 4. QR Code Donations
- Generate donation QR codes
- Multiple payment platform support
- Track donations (optional)
- Perfect for mosque fundraising

### 5. Scrolling Ticker
- Left-to-right or right-to-left scroll
- Multiple messages in rotation
- Speed control
- Perfect for quick announcements

### 6. Full Customization
- Upload custom logo
- Choose color scheme
- Select layout options
- Custom fonts (coming soon)
- Multi-language support

### 7. Multi-tenant Architecture
- Each organization gets own subdomain
- Isolated data and settings
- Secure login system
- Role-based access (Admin, Editor, Viewer)

---

## Target Markets

### Phase 1: Mosques & Islamic Centers (Primary)

**Why Mosques First?**
- Clear need for prayer time display
- Donation QR is perfect fit
- Strong community networks (word-of-mouth)
- Less price-sensitive for religious purposes

**Mosque-Specific Features:**
- 5 daily prayer times
- Jummah prayer highlight
- Ramadan special mode
- Eid announcements
- Hijri calendar
- Arabic text support
- Donation QR codes

### Phase 2: Educational Institutions

**Schools, Colleges, Universities:**
- Class schedules
- Exam announcements
- Event calendars
- Achievement displays
- Emergency alerts

### Phase 3: Other Organizations

**Corporate Offices:**
- Meeting room displays
- Company announcements
- KPI dashboards
- Welcome screens

**Hospitals & Clinics:**
- Queue management
- Department info
- Health tips
- Emergency updates

**Community Centers:**
- Event schedules
- Community news
- Local announcements

---

## Business Model

### Subscription Plans (Proposed)

| Plan | Price | Features |
|------|-------|----------|
| **Starter** | Free | 1 display, basic features, Minara branding |
| **Pro** | $19/mo | 3 displays, all features, minimal branding |
| **Business** | $49/mo | 10 displays, priority support, no branding |
| **Enterprise** | Custom | Unlimited, custom features, dedicated support |

### Revenue Streams
1. **Subscriptions** - Monthly/yearly plans
2. **Ad Revenue Share** - Organizations can sell ad space
3. **Custom Development** - Enterprise features
4. **White-label** - Reseller partnerships

---

## Technical Specifications

### Client Requirements
- Any device with modern web browser
- Smart TV, Android TV, Fire TV, Apple TV
- Raspberry Pi with browser
- Any computer with HDMI output
- Stable internet connection

### Supported Browsers
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

### Display Requirements
- Minimum: 720p (1280x720)
- Recommended: 1080p (1920x1080)
- Supported: 4K (3840x2160)

### Backend (Our Infrastructure)
- Cloud hosting (AWS/Vercel/DigitalOcean)
- Auto-scaling for traffic
- 99.9% uptime SLA
- Daily backups
- SSL encryption

---

## Competitive Advantages

| Feature | Competitors | Minara |
|---------|-------------|--------|
| Prayer time integration | ❌ | ✅ |
| Hijri calendar | ❌ | ✅ |
| Donation QR | ❌ | ✅ |
| Mosque-first design | ❌ | ✅ |
| Arabic RTL support | Some | ✅ |
| Affordable pricing | $$$ | $ |
| Easy setup | Complex | Simple |

---

## Roadmap

### Version 1.0 (Current)
- [x] Basic display layout
- [x] Prayer times
- [x] Event management
- [x] Live/upcoming events
- [x] Auto-refresh

### Version 2.0 (Planned)
- [ ] Admin dashboard
- [ ] Multi-user access
- [ ] Donation QR
- [ ] Scrolling ticker
- [ ] Custom themes

### Version 3.0 (Future)
- [ ] Mobile app
- [ ] Analytics dashboard
- [ ] Multi-screen management
- [ ] Template library
- [ ] API access

---

## Demo

**Live Demo URL:**
🔗 [https://dficem.aiosolibe.cloud/display](https://dficem.aiosolibe.cloud/display)

**Demo Credentials:**
(Contact for dashboard access)

---

## Contact & Support

- **Company:** AIOSOL
- **Product:** Minara
- **Support:** support@aiosol.com (planned)
- **Sales:** sales@aiosol.com (planned)

---

**Minara** - Announce Smarter.
