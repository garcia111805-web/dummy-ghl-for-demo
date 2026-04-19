import { useState } from 'react';
import {
  Search, MessageCircle,
  AlignLeft, MoreVertical, Link, Paperclip, Smile,
  ChevronDown, Clock, Play, Download, Phone, Mail, Folder,
  Star, Trash2, CheckSquare
} from 'lucide-react';
import './App.css';



const dummyConversations = [
  { id: 1, name: 'Justin Garcia', time: '3:34 PM', preview: 'Hey Justin! Just got your quote fo...', initials: 'JG', color: '#71cf88', unread: true },
  { id: 11, name: 'Alexander', time: '8:02 AM', preview: 'Hey Alexander! Just got your quote...', initials: 'AL', color: '#3B82F6', unread: true },
  { id: 12, name: 'James Michael', time: '8:20 AM', preview: 'New Lead from Website Chat Widget!', initials: 'JM', color: '#10B981', unread: true },
  { id: 2, name: '(832) 867-0318', time: '1:12 PM', preview: 'Inbound Call', initials: '+1', color: '#9CA3AF', unread: true },
  { id: 3, name: 'Sarah Jenkins', time: '11:45 AM', preview: 'Hey Sarah! Sorry I missed you...', initials: 'SJ', color: '#FBBF24', unread: false },
  { id: 4, name: 'Mike Robinson', time: '10:30 AM', preview: 'Automated follow up: Hi Mike...', initials: 'MR', color: '#60A5FA', unread: false },
  { id: 5, name: 'Emily Chen', time: 'Yesterday', preview: 'Just click the link below for a...', initials: 'EC', color: '#A78BFA', unread: false },
  { id: 6, name: '(512) 555-0198', time: 'Yesterday', preview: 'Inbound Call', initials: '+1', color: '#9CA3AF', unread: false },
  { id: 7, name: 'David Smith', time: 'Yesterday', preview: 'Thanks for reaching out! Here is...', initials: 'DS', color: '#F87171', unread: false },
  { id: 8, name: 'Jessica Taylor', time: 'Mon', preview: 'Hey Jessica! Just following up...', initials: 'JT', color: '#34D399', unread: false },
  { id: 9, name: 'Robert Wilson', time: 'Mon', preview: 'Inbound Call', initials: 'RW', color: '#818CF8', unread: false },
  { id: 10, name: 'Amanda Brown', time: 'Last Week', preview: 'Sorry I missed you... in the...', initials: 'AB', color: '#F472B6', unread: false },
];

const ConversationsList = ({ activeId, onSelect }: { activeId: number; onSelect: (id: number) => void }) => {
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
          <div key={conv.id} className={`conversation-item ${activeId === conv.id ? 'active' : ''}`} onClick={() => onSelect(conv.id)} style={{cursor: 'pointer'}}>
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

const AlexanderChat = () => {
  return (
    <div className="main-chat">
      <div className="chat-header">
        <div className="chat-title">Alexander</div>
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
          08:02 AM
        </div>

        {/* First outbound message */}
        <div className="message-bubble message-out">
          <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '8px'}}>
            <span></span>
            <MoreVertical size={14} style={{cursor: 'pointer', opacity: 0.8}} />
          </div>
          <p style={{marginBottom: '12px'}}>Hey Alexander! Just got your quote form!</p>
          <p style={{marginBottom: '12px'}}>I'll be in touchr shortly!</p>
          <p style={{marginBottom: '12px'}}>
            -mark from mark solar<br/>
            Reply STOP to unsubscribe.
          </p>
          <div className="status-text" style={{color: '#E5E7EB', display: 'flex', justifyContent: 'flex-end', marginTop: 4, marginBottom: 0, fontSize: '10px'}}>
            <CheckSquare size={10} style={{marginRight: 2}}/> 08:02 AM
          </div>
        </div>

        {/* Second outbound message */}
        <div className="message-bubble message-out" style={{marginTop: '16px'}}>
          <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '8px'}}>
            <span></span>
            <MoreVertical size={14} style={{cursor: 'pointer', opacity: 0.8}} />
          </div>
          <p style={{marginBottom: '12px'}}>*I'll be in *touch* shortly! Sorry I haven't had enough coffee today haha!</p>
          <p>Talk soon!</p>
          <div className="status-text" style={{color: '#E5E7EB', display: 'flex', justifyContent: 'flex-end', marginTop: 4, marginBottom: 0, fontSize: '10px'}}>
            <CheckSquare size={10} style={{marginRight: 2}}/> 08:03 AM
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

const AlexanderMillarChat = () => {
  return (
    <div className="main-chat">
      <div className="chat-header">
        <div className="chat-title">James Michael</div>
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
          08:20 AM
        </div>

        <div className="message-bubble message-out">
          <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '8px'}}>
            <span></span>
            <MoreVertical size={14} style={{cursor: 'pointer', opacity: 0.8}} />
          </div>
          <p style={{marginBottom: '12px', fontWeight: 600}}>New Lead from Website Chat Widget!</p>
          <p style={{marginBottom: '8px'}}>Info:</p>
          <p style={{marginBottom: '4px'}}>- Name: James Michael</p>
          <p style={{marginBottom: '4px'}}>- Phone: CHECK LEADCONNECTOR APP</p>
          <p style={{marginBottom: '12px'}}>- Message: We are looking to have our backyard and pool deck area just generally maintained, weeded, etc</p>
          <p style={{marginBottom: '12px'}}>We've let them know you'll be in touch soon!</p>
          <p style={{fontSize: '12px', opacity: 0.9}}>-jstn systems (Do NOT reply to this message; it's not the client!)</p>
          <div className="status-text" style={{color: '#E5E7EB', display: 'flex', justifyContent: 'flex-end', marginTop: 4, marginBottom: 0, fontSize: '10px'}}>
            <CheckSquare size={10} style={{marginRight: 2}}/> 08:20 AM
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

const ChatArea = ({ activeId }: { activeId: number }) => {
  if (activeId === 11) return <AlexanderChat />;
  if (activeId === 12) return <AlexanderMillarChat />;
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
            https://jstnsystems.com/contact-us
          </a>
          <p style={{marginBottom: '12px'}}>
            -mark from mark solar
          </p>
          <p style={{fontSize: '12px', opacity: 0.9}}>
            Reply STOP to unsubscribe.<br/>
            Thanks, mark solar
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



const App = () => {
  const [activeId, setActiveId] = useState(1);
  return (
    <div className="app-container">
      <ConversationsList activeId={activeId} onSelect={setActiveId} />
      <ChatArea activeId={activeId} />
    </div>
  );
};

export default App;
