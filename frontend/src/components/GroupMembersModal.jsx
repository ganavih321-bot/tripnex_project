import React, { useState } from 'react';
import { 
  X, Users, UserPlus, Edit2, Check, Trash2, ShieldCheck, 
  Wallet, Mail, Phone, Sparkles, CheckCircle2, UserCheck
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function GroupMembersModal({ 
  isOpen, 
  onClose, 
  travelers = [], 
  peopleCount = 5, 
  totalBudget = 20000, 
  totalSpent = 15700, 
  onUpdateTravelers 
}) {
  const { t } = useLanguage();
  const [newMemberName, setNewMemberName] = useState('');
  const [newMemberRole, setNewMemberRole] = useState('Explorer');
  const [editingId, setEditingId] = useState(null);
  const [editingName, setEditingName] = useState('');

  if (!isOpen) return null;

  const fairShare = Math.round(totalSpent / (travelers.length || peopleCount || 1));

  const roleOptions = [
    { label: 'Organizer', avatar: '👤' },
    { label: 'Navigator', avatar: '🎒' },
    { label: 'Photographer', avatar: '📸' },
    { label: 'Foodie', avatar: '🎵' },
    { label: 'Treasurer', avatar: '⚡' },
    { label: 'Explorer', avatar: '🧭' }
  ];

  // Add new member
  const handleAddMember = (e) => {
    e.preventDefault();
    if (!newMemberName.trim()) return;

    const chosenRoleObj = roleOptions.find(r => r.label === newMemberRole) || roleOptions[5];
    const newMember = {
      id: Date.now(),
      name: newMemberName.trim(),
      paid: 0,
      avatar: chosenRoleObj.avatar,
      role: newMemberRole,
      status: 'Present in Trip 🟢',
      email: `${newMemberName.trim().toLowerCase().replace(/\s+/g, '')}@student.edu`
    };

    const updated = [...travelers, newMember];
    if (onUpdateTravelers) {
      onUpdateTravelers(updated);
    }
    setNewMemberName('');
  };

  // Edit existing member name
  const handleStartEdit = (m) => {
    setEditingId(m.id || m.name);
    setEditingName(m.name);
  };

  const handleSaveEdit = (mId) => {
    if (!editingName.trim()) return;
    const updated = travelers.map(tMember => {
      if ((tMember.id || tMember.name) === mId) {
        return { ...tMember, name: editingName.trim() };
      }
      return tMember;
    });

    if (onUpdateTravelers) {
      onUpdateTravelers(updated);
    }
    setEditingId(null);
  };

  // Remove a member
  const handleRemoveMember = (mId) => {
    if (travelers.length <= 1) return;
    const updated = travelers.filter(tMember => (tMember.id || tMember.name) !== mId);
    if (onUpdateTravelers) {
      onUpdateTravelers(updated);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-card" 
        onClick={(e) => e.stopPropagation()} 
        style={{
          maxWidth: '640px',
          maxHeight: '88vh',
          display: 'flex',
          flexDirection: 'column',
          padding: '2rem'
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div style={{ background: 'var(--electric-blue-light)', color: 'var(--electric-blue)', padding: '0.5rem', borderRadius: '10px' }}>
              <Users size={22} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <h2 style={{ fontSize: '1.35rem' }}>{t('members_modal_title', 'Trip Members & Attendance')}</h2>
                <span className="badge badge-green" style={{ fontSize: '0.75rem' }}>
                  {travelers.length} {t('members_present_badge', 'Present in Trip 🟢')}
                </span>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                {t('members_modal_sub', 'Verified student travel group roster')} • Fair share: ₹{fairShare.toLocaleString('en-IN')}/{t('dash_per_person', 'person')}
              </p>
            </div>
          </div>
          <button type="button" onClick={onClose} className="btn btn-ghost btn-icon">
            <X size={20} />
          </button>
        </div>

        {/* Add Member Quick Bar */}
        <form onSubmit={handleAddMember} style={{
          background: 'var(--bg-light)',
          padding: '1rem',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border-color)',
          marginBottom: '1.25rem',
          display: 'flex',
          gap: '0.5rem',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          <input
            type="text"
            value={newMemberName}
            onChange={(e) => setNewMemberName(e.target.value)}
            placeholder={t('members_add_placeholder', "Enter friend's name...")}
            required
            style={{
              flex: 1,
              minWidth: '160px',
              padding: '0.6rem 0.85rem',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-color)',
              fontSize: '0.875rem'
            }}
          />

          <select
            value={newMemberRole}
            onChange={(e) => setNewMemberRole(e.target.value)}
            style={{
              padding: '0.6rem 0.75rem',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-color)',
              fontSize: '0.85rem',
              background: '#ffffff'
            }}
          >
            {roleOptions.map(r => (
              <option key={r.label} value={r.label}>{r.avatar} {r.label}</option>
            ))}
          </select>

          <button type="submit" className="btn btn-primary btn-sm" style={{ padding: '0.6rem 0.95rem' }}>
            <UserPlus size={15} />
            <span>{t('members_add_btn', 'Add Member')}</span>
          </button>
        </form>

        {/* Members Roster List */}
        <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingRight: '0.25rem' }}>
          {travelers.map((m, idx) => {
            const mId = m.id || m.name || idx;
            const isEditing = editingId === mId;
            const paidNum = Number(m.paid || 0);
            const diff = paidNum - fairShare;

            return (
              <div
                key={mId}
                className="card"
                style={{
                  padding: '0.9rem 1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.75rem',
                  background: '#ffffff',
                  border: '1px solid var(--border-color)'
                }}
              >
                {/* Member Info */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1 }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: 'var(--bg-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.3rem',
                    border: '1px solid var(--border-color)',
                    flexShrink: 0
                  }}>
                    {m.avatar || '👤'}
                  </div>

                  <div style={{ flex: 1 }}>
                    {isEditing ? (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <input
                          type="text"
                          value={editingName}
                          onChange={(e) => setEditingName(e.target.value)}
                          style={{
                            padding: '0.25rem 0.5rem',
                            borderRadius: '4px',
                            border: '1px solid var(--electric-blue)',
                            fontSize: '0.9rem',
                            fontWeight: 700
                          }}
                        />
                        <button
                          type="button"
                          onClick={() => handleSaveEdit(mId)}
                          className="btn btn-sm btn-primary"
                          style={{ padding: '0.25rem 0.5rem' }}
                        >
                          <Check size={14} />
                        </button>
                      </div>
                    ) : (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <h4 style={{ fontSize: '1rem', color: 'var(--primary-navy)', margin: 0 }}>
                          {m.name}
                        </h4>
                        {m.role && (
                          <span style={{
                            fontSize: '0.7rem',
                            fontWeight: 700,
                            color: 'var(--electric-blue)',
                            background: 'var(--electric-blue-light)',
                            padding: '0.1rem 0.45rem',
                            borderRadius: '4px'
                          }}>
                            {m.role}
                          </span>
                        )}
                        <span style={{ fontSize: '0.7rem', color: '#059669', background: '#ecfdf5', padding: '0.1rem 0.35rem', borderRadius: '4px' }}>
                          ● Present
                        </span>
                      </div>
                    )}

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.775rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                      <span>{t('members_paid_label', 'Paid')}: ₹{paidNum.toLocaleString('en-IN')}</span>
                      <span>•</span>
                      <span style={{ color: diff > 0 ? 'var(--electric-blue)' : diff < 0 ? 'var(--amber)' : '#059669', fontWeight: 600 }}>
                        {diff > 0 ? `Receives ₹${Math.round(diff)}` : diff < 0 ? `Owes ₹${Math.round(Math.abs(diff))}` : 'Settled'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Actions: Edit & Remove */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  {!isEditing && (
                    <button
                      type="button"
                      onClick={() => handleStartEdit(m)}
                      className="btn btn-ghost btn-sm btn-icon"
                      title={t('members_edit_name', 'Edit Name')}
                      style={{ color: 'var(--text-muted)' }}
                    >
                      <Edit2 size={14} />
                    </button>
                  )}

                  {travelers.length > 2 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveMember(mId)}
                      className="btn btn-ghost btn-sm btn-icon"
                      title={t('members_remove', 'Remove member')}
                      style={{ color: 'var(--danger)' }}
                    >
                      <Trash2 size={14} />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            Total Group: <strong>{travelers.length} members</strong> (₹{Math.round(totalSpent / travelers.length).toLocaleString('en-IN')}/{t('dash_per_person', 'person')})
          </span>

          <button type="button" onClick={onClose} className="btn btn-primary btn-sm" style={{ padding: '0.5rem 1.25rem' }}>
            {t('opt_btn_cancel', 'Done')}
          </button>
        </div>
      </div>
    </div>
  );
}
