// @ts-nocheck
"use client"
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CheckSquare, Square, ChevronDown, ChevronRight } from 'lucide-react';

const ChecklistItem = ({ item, onToggle, level = 0, onToggleExpand }) => {
  return (
    <div className="w-full">
      <div 
        className={`flex items-center gap-2 py-1 px-2 hover:bg-accent/50 rounded-lg cursor-pointer`}
        style={{ marginLeft: `${level * 24}px` }}
      >
        <button 
          onClick={onToggle}
          className="flex items-center justify-center w-5 h-5"
        >
          {item.checked ? (
            <CheckSquare className="w-4 h-4 text-primary" />
          ) : (
            <Square className="w-4 h-4" />
          )}
        </button>
        
        {item.items && (
          <button onClick={onToggleExpand} className="p-1">
            {item.expanded ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
          </button>
        )}
        
        <span className={item.checked ? "text-muted-foreground line-through" : ""}>
          {item.text}
        </span>
      </div>
      
      {item.items && item.expanded && (
        <div className="ml-4">
          {item.items.map((childItem, index) => (
            <ChecklistItem
              key={index}
              item={childItem}
              onToggle={() => onToggle(childItem)}
              level={level + 1}
              onToggleExpand={() => onToggleExpand(childItem)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const NestedChecklist = ({ data }) => {
  const [checklist, setChecklist] = useState(() => 
    JSON.parse(JSON.stringify(data)).map(item => ({
      ...item,
      checked: false,
      expanded: true
    }))
  );

  const toggleCheck = (item, checkedValue) => {
    const toggleNestedCheck = (items, targetItem) => {
      return items.map(childItem => {
        if (childItem === targetItem) {
          return { ...childItem, checked: checkedValue };
        }
        if (childItem.items) {
          return {
            ...childItem,
            items: toggleNestedCheck(childItem.items, targetItem),
          };
        }
        return childItem;
      });
    };

    setChecklist(prevList => 
      prevList.map(listItem => {
        if (listItem === item) {
          return { ...listItem, checked: checkedValue };
        }
        if (listItem.items) {
          return {
            ...listItem,
            items: toggleNestedCheck(listItem.items, item),
          };
        }
        return listItem;
      })
    );
  };

  const toggleExpand = (item) => {
    const toggleNestedExpand = (items, targetItem) => {
      return items.map(childItem => {
        if (childItem === targetItem) {
          return { ...childItem, expanded: !childItem.expanded };
        }
        if (childItem.items) {
          return {
            ...childItem,
            items: toggleNestedExpand(childItem.items, targetItem),
          };
        }
        return childItem;
      });
    };

    setChecklist(prevList => 
      prevList.map(listItem => {
        if (listItem === item) {
          return { ...listItem, expanded: !listItem.expanded };
        }
        if (listItem.items) {
          return {
            ...listItem,
            items: toggleNestedExpand(listItem.items, item),
          };
        }
        return listItem;
      })
    );
  };

  const resetChecklist = () => {
    const resetNestedItems = (items) => {
      return items.map(item => ({
        ...item,
        checked: false,
        items: item.items ? resetNestedItems(item.items) : undefined
      }));
    };

    setChecklist(prevList => 
      prevList.map(item => ({
        ...item,
        checked: false,
        items: item.items ? resetNestedItems(item.items) : undefined
      }))
    );
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-4 p-4 border rounded-xl">
      <div className="space-y-2">
        {checklist.map((item, index) => (
          <ChecklistItem
            key={index}
            item={item}
            onToggle={() => toggleCheck(item, !item.checked)}
            onToggleExpand={() => toggleExpand(item)}
          />
        ))}
      </div>
      <Button 
        onClick={resetChecklist}
        variant="outline"
        className="w-full mt-4"
      >
        Reset All
      </Button>
    </div>
  );
};

// Example usage
export default function Checklist() {
  const sampleData = [
    {
      text: "Project Setup",
      items: [
        { text: "Initialize repository" },
        { text: "Install dependencies" },
        {
          text: "Configure environment",
          items: [
            { text: "Setup .env" },
            { text: "Configure database" }
          ]
        }
      ]
    },
    {
      text: "Development",
      items: [
        { text: "Create components" },
        { text: "Write tests" },
        { text: "Documentation" }
      ]
    }
  ];

  return <NestedChecklist data={sampleData} />;
}
