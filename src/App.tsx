import {
  Search, Rocket, LayoutDashboard, MessageCircle, Calendar,
  Users, Briefcase, CreditCard, Settings, Plus, Phone, Mail, Folder,
  Star, Trash2, MoreVertical, Link, Paperclip, Smile, AlignLeft,
  ChevronDown, Send, Clock, Play, Download, HelpCircle, Bell, User, CheckSquare
} from 'lucide-react';
import './App.css';

const SidebarDark = () => {
  return (
    <div className="sidebar-dark">
      <div className="global-logo">
        <img src="/logo.png" alt="Agency Logo" className="agency-logo-img" />
      </div>
      
      <div className="account-switcher">
        <div className="account-avatar">
           <User size={16} color="#FFFFFF"/>
        </div>
        <div className="account-info">
          <span className="account-name">Mark Solar</span>
          <span className="account-location">Columbus, Ohio</span>
        </div>
        <ChevronDown size={14} color="#9CA3AF" />
      </div>

      <div className="search-bar-dark">
        <Search size={14} color="#9CA3AF" />
        <input type="text" placeholder="Search" />
        <span className="shortcut-key">ctrlK</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color:'#10B981'}}><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
      </div>

      <div className="nav-menu">
        <ul>
          <li className="nav-item"><Rocket size={18} /> Launchpad</li>
          <li className="nav-item"><LayoutDashboard size={18} /> Dashboard</li>
          <li className="nav-item active"><MessageCircle size={18} /> Conversations</li>
          <li className="nav-item"><Calendar size={18} /> Calendars</li>
          <li className="nav-item"><Users size={18} /> Contacts</li>
          <li className="nav-item"><Briefcase size={18} /> Opportunities</li>
          <li className="nav-item"><CreditCard size={18} /> Payments</li>
        </ul>
        <div className="section-divider"></div>
        <ul>
          <li className="nav-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            AI Agents
          </li>
          <li className="nav-item"><Send size={18} /> Marketing</li>
          <li className="nav-item"><Play size={18} /> Automation</li>
          <li className="nav-item"><Folder size={18} /> Sites</li>
          <li className="nav-item"><Users size={18} /> Memberships</li>
        </ul>
        <div style={{marginTop: 'auto'}}>
          <li className="nav-item"><Settings size={18} /> Settings</li>
        </div>
      </div>
    </div>
  );
};

const SidebarLight = () => {
  return (
    <div className="sidebar-light">
      <div className="light-header">Conversations</div>
      <div className="top-tabs">
        <div className="top-tab active">Conversations</div>
        <div className="top-tab">Manual Actions</div>
        <div className="top-tab">Snippets</div>
        <div className="top-tab">Trigger Links</div>
      </div>
      
      <div className="light-content">
        <div className="btn-new">
          <Plus size={16} /> New
        </div>

        <div className="sub-nav-group">
          <div className="sub-nav-header" style={{backgroundColor: '#4B5563', color: 'white', padding: '8px', borderRadius: '4px', marginBottom: '12px'}}>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <span style={{color: '#9CA3AF', fontSize: '11px'}}>Team Inbox</span>
              <span>Start New Conversation</span>
            </div>
            <ChevronDown size={14} />
          </div>
          
          <div style={{marginBottom: '16px'}}>
             <div className="sub-nav-item">Unread</div>
             <div className="sub-nav-item">Recents</div>
             <div className="sub-nav-item">Starred</div>
             <div className="sub-nav-item active">All</div>
          </div>
        </div>

        <div className="sub-nav-group">
          <div className="sub-nav-header">
            <span>My Inbox</span>
            <ChevronDown size={14} />
          </div>
          <div className="sub-nav-item" style={{display: 'flex', alignItems: 'center', gap: '8px'}}><User size={14}/> Assigned to me</div>
          <div className="sub-nav-item">Unread</div>
          <div className="sub-nav-item">Recents</div>
          <div className="sub-nav-item">Starred</div>
          <div className="sub-nav-item">All</div>
        </div>

        <div className="sub-nav-group">
          <div className="sub-nav-header">
            <span style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
               Internal Chat
            </span>
          </div>
          <div className="sub-nav-item">Unread</div>
          <div className="sub-nav-item">All</div>
        </div>
      </div>
    </div>
  );
};

const dummyConversations = [
  { id: 1, name: 'Justin Garcia', time: '3:34 PM', preview: 'Hey Justin! Just got your quote fo...', initials: 'JG', color: '#71cf88', active: true, unread: true },
  { id: 2, name: '(832) 867-0318', time: '1:12 PM', preview: 'Inbound Call', initials: '+1', color: '#9CA3AF', active: false, unread: true },
  { id: 3, name: 'Sarah Jenkins', time: '11:45 AM', preview: 'Hey Sarah! Sorry I missed you...', initials: 'SJ', color: '#FBBF24', active: false, unread: false },
  { id: 4, name: 'Mike Robinson', time: '10:30 AM', preview: 'Automated follow up: Hi Mike...', initials: 'MR', color: '#60A5FA', active: false, unread: false },
  { id: 5, name: 'Emily Chen', time: 'Yesterday', preview: 'Just click the link below for a...', initials: 'EC', color: '#A78BFA', active: false, unread: false },
  { id: 6, name: '(512) 555-0198', time: 'Yesterday', preview: 'Inbound Call', initials: '+1', color: '#9CA3AF', active: false, unread: false },
  { id: 7, name: 'David Smith', time: 'Yesterday', preview: 'Thanks for reaching out! Here is...', initials: 'DS', color: '#F87171', active: false, unread: false },
  { id: 8, name: 'Jessica Taylor', time: 'Mon', preview: 'Hey Jessica! Just following up...', initials: 'JT', color: '#34D399', active: false, unread: false },
  { id: 9, name: 'Robert Wilson', time: 'Mon', preview: 'Inbound Call', initials: 'RW', color: '#818CF8', active: false, unread: false },
  { id: 10, name: 'Amanda Brown', time: 'Last Week', preview: 'Sorry I missed you... in the...', initials: 'AB', color: '#F472B6', active: false, unread: false },
];

const ConversationsList = () => {
  return (
    <div className="conversations-list">
      <div className="list-header">
        <div className="search-line">
          <div className="search-box-light">
            <Search size={14} color="#6B7280" />
            <input type="text" placeholder="Search..." />
          </div>
          <button className="filter-icon-btn"><AlignLeft size={16}/></button>
        </div>
        <div className="list-filters">
          <div style={{display: 'flex', alignItems: 'center', gap: '6px'}}>
            <div style={{width: 14, height: 14, border: '1px solid #D1D5DB', borderRadius: 3, cursor: 'pointer'}}></div>
            <span>{dummyConversations.length} Results</span>
          </div>
          <div className="filter-dropdown">
            Latest-All <ChevronDown size={14} />
          </div>
        </div>
      </div>
      
      <div className="conversation-items-container">
        {dummyConversations.map((conv) => (
          <div key={conv.id} className={`conversation-item ${conv.active ? 'active' : ''}`}>
            <div className="avatar" style={{backgroundColor: conv.color}}>
              {conv.initials}
              {conv.unread && (
                <div className="notification-dot" style={{backgroundColor: '#374151', width: 14, height: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', right: -4, bottom: -4}}>
                  <MessageCircle size={8} fill="white"/>
                </div>
              )}
            </div>
            <div className="conv-info">
              <div className="conv-header">
                <span className="conv-name" style={{fontWeight: conv.unread ? 600 : 500}}>{conv.name}</span>
                <span className="conv-time" style={{color: conv.unread ? '#374151' : '#6B7280', fontWeight: conv.unread ? 500 : 400}}>{conv.time}</span>
              </div>
              <div className="conv-preview" style={{color: conv.unread ? '#4B5563' : '#6B7280'}}>
                {conv.preview === 'Inbound Call' && <Phone size={12} style={{color: '#EF4444'}} />}
                {conv.preview}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ChatArea = () => {
  return (
    <div className="main-chat">
      <div className="chat-header">
        <div className="chat-title">Justin Garcia</div>
        <div className="chat-actions">
          <button className="icon-btn no-border"><Folder size={18} /></button>
          <button className="icon-btn no-border"><Star size={18} /></button>
          <button className="icon-btn no-border"><Mail size={18} /></button>
          <button className="icon-btn no-border"><Trash2 size={18} /></button>
          <button className="icon-btn no-border"><AlignLeft size={18} /></button>
          <div style={{display: 'flex', alignItems: 'center', marginLeft: '12px', color: '#6B7280', fontSize: '13px'}}>
            <ChevronDown size={14} style={{transform: 'rotate(90deg)'}}/>
            <ChevronDown size={14} style={{transform: 'rotate(-90deg)'}}/>
          </div>
        </div>
      </div>

      <div className="chat-history">
        <div style={{ alignSelf: 'center', fontSize: '12px', color: '#9CA3AF', margin: '16px 0 24px 0' }}>
          08:10 AM
        </div>

        {/* Missed Call item */}
        <div className="missed-call-box">
          <div className="missed-call-header">
             <Phone size={14} /> Inbound Call
          </div>
          <div className="audio-player">
            <Play size={16} color="#6B7280" />
            <span style={{fontSize: '11px', color: '#6B7280', fontWeight: 500}}>00:00</span>
            <div className="audio-timeline"></div>
            <span style={{fontSize: '11px', color: '#6B7280', fontWeight: 500}}>00:00</span>
            <Volume2Icon />
            <span style={{fontSize: '11px', color: '#6B7280'}}>x1</span>
            <Download size={14} color="#6B7280" />
          </div>
          <div style={{fontSize: '10px', color: '#9CA3AF', marginTop: '12px'}}>
            08:10 AM
          </div>
        </div>

        {/* Automated Reply */}
        <div className="message-bubble message-out">
          <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '8px'}}>
            <strong>Hey! 😊</strong>
            <MoreVertical size={14} style={{cursor: 'pointer', opacity: 0.8}} />
          </div>
          <p style={{marginBottom: '12px'}}>Sorry I missed you... in the middle of a job!</p>
          <p style={{marginBottom: '12px'}}>
            If you want to give me a few details about your inquiry that would be awesome.
            Just click the link below for a free quote and I'll get right back to you :)
          </p>
          <a href="#" style={{color: '#93C5FD', display: 'block', marginBottom: '12px', textDecoration: 'underline'}}>
            https://marksolar.com/contact-us
          </a>
          <p style={{marginBottom: '12px'}}>
            -Mark with Mark Solar 😁
          </p>
          <p style={{fontSize: '12px', opacity: 0.9}}>
            Reply STOP to unsubscribe.<br/>
            Thanks, Mark Solar
          </p>
          <div className="status-text" style={{color: '#E5E7EB', display: 'flex', justifyContent: 'flex-end', marginTop: 4, marginBottom: 0, fontSize: '10px'}}>
             <CheckSquare size={10} style={{marginRight: 2}}/> 08:10 AM
          </div>
        </div>

      </div>

      <div className="chat-input-area">
        <div className="input-tabs">
          <div className="input-tab active">SMS</div>
          <div className="input-tab">WhatsApp</div>
          <div className="input-tab internal">
            Internal Comment
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
          </div>
        </div>
        
        <div className="message-editor">
          <textarea className="message-textarea" placeholder="Type a message"></textarea>
          <div className="editor-toolbar">
            <div className="toolbar-left">
              <span className="toolbar-icon"><Paperclip size={18}/></span>
              <span className="toolbar-icon"><Smile size={18}/></span>
              <span className="toolbar-icon"><AlignLeft size={18}/></span>
              <span className="toolbar-icon"><Link size={18}/></span>
              <span className="toolbar-icon"><MoreVertical size={18}/></span>
            </div>
            <div className="toolbar-right">
              <span className="char-count">Segs: 0</span>
              <button className="btn-outline">Clear</button>
              <button className="btn-send">
                Send <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 16 16 12 12 8"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
              </button>
              <button className="btn-send" style={{padding: '8px'}}>
                <Clock size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Volume2Icon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
    <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
  </svg>
)

const ContactSidebar = () => {
  return (
    <div className="contact-sidebar">
      <div className="top-right-nav">
        <div className="nav-icon bg-green"><Phone size={14} fill="currentColor" /></div>
        <div className="nav-icon bg-purple">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3 6 6 1-4 4 1 6-6-3-6 3 1-6-4-4 6-1z"/></svg>
          Ask AI
        </div>
        <div className="nav-icon bg-red">
           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l18 0"/><path d="M3 17l18 0"/><path d="M3 5l18 0"/></svg>
           <div className="notification-dot"></div>
        </div>
        <div className="nav-icon bg-red" style={{backgroundColor: '#F97316'}}>
           <Bell size={14} fill="currentColor" />
        </div>
        <div className="nav-icon" style={{backgroundColor: '#60A5FA'}}>
           <HelpCircle size={14} color="white"/>
        </div>
        <div className="nav-icon" style={{backgroundColor: '#71cf88', color: 'white'}}>JG</div>
      </div>

      <div className="contact-profile">
        <div className="profile-avatar-lg">
          JG
          <div style={{position: 'absolute', backgroundColor: 'transparent', padding: '4px', right: '40px', bottom: '110px'}}></div>
        </div>
        <div className="profile-name">
          Justin Garcia <Link size={16} color="#3B82F6" />
        </div>
        <div className="profile-actions">
          <button className="round-btn"><Phone size={16} /></button>
          <button className="round-btn"><Mail size={16} /></button>
        </div>
      </div>

      <div className="accordion-section">
        <div className="accordion-header">
          <span>Contact</span>
          <ChevronDown size={16} />
        </div>
        <div className="accordion-content">
          <div className="contact-detail-row">
            <div className="detail-icon-text"><Mail size={14}/> Email</div>
            <Plus size={14} color="#3B82F6" cursor="pointer"/>
          </div>
          <div className="contact-detail-row">
            <div className="detail-icon-text"><Phone size={14}/> Phone</div>
            <Plus size={14} color="#3B82F6" cursor="pointer"/>
          </div>
          <div className="detail-value">• +63 961 348 0474</div>
        </div>
      </div>
      
      <div className="accordion-section">
        <div className="accordion-header" style={{color: '#6B7280', fontWeight: 500}}>
          Owner (Assigned to)
        </div>
        <div className="accordion-content">
          <div style={{color: '#9CA3AF', fontSize: '13px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            Unassigned <ChevronDown size={14} />
          </div>
        </div>
      </div>
      
      <div className="accordion-section">
        <div className="accordion-header" style={{color: '#6B7280', fontWeight: 500}}>
          Followers<br/>
          <span style={{fontSize: '11px', fontWeight: 'normal'}}>Search followers</span>
        </div>
      </div>

      <div className="accordion-section">
        <div className="accordion-header" style={{color: '#6B7280', fontWeight: 500}}>
          Tags
          <ChevronDown size={14} />
        </div>
      </div>

      <div className="accordion-section">
        <div className="accordion-header" style={{color: '#6B7280', fontWeight: 500}}>
          Active Automations
          <ChevronDown size={14} />
        </div>
      </div>

    </div>
  );
};

const App = () => {
  return (
    <div className="app-container">
      <SidebarDark />
      <SidebarLight />
      <ConversationsList />
      <ChatArea />
      <ContactSidebar />
    </div>
  );
};

export default App;
